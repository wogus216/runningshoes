"""Build an editable landscape study and one still. Never renders an animation.
Usage: blender --background --factory-startup --python cinematic-scene.py -- ROOT
GPX elevations remain reference values; landscape height is exaggerated 1.8x.
"""
import bpy
import json
import math
import pathlib
import random
import sys
from datetime import date
from mathutils import Vector
from mathutils.geometry import tessellate_polygon

root = pathlib.Path(sys.argv[sys.argv.index('--') + 1]).resolve()
data = json.loads((root / 'public/data/sonkeechung/course.json').read_text())
output = root / '.omc/blender/sonkeechung'
output.mkdir(parents=True, exist_ok=True)
random.seed(42)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
scene = bpy.context.scene
scene.unit_settings.system = 'METRIC'
scene.unit_settings.scale_length = 100
scene['Data caveat'] = 'Reference GPX, not official survey. Terrain displayed at 1.8x. Bridge illustrative.'
scene['Sources'] = json.dumps(data['sources'])


# NOAA approximate solar geometry. Scene axes: +X east, +Y north, +Z up.
# https://gml.noaa.gov/grad/solcalc/solareqns.PDF
local_hour = 10
latitude = math.radians(data['origin'][1])
longitude = data['origin'][0]
day = date(2026, 11, 15).timetuple().tm_yday
gamma = 2 * math.pi / 365 * (day - 1 + (local_hour - 12) / 24)
eqtime = 229.18 * (.000075 + .001868 * math.cos(gamma) - .032077 * math.sin(gamma) - .014615 * math.cos(2 * gamma) - .040849 * math.sin(2 * gamma))
decl = .006918 - .399912 * math.cos(gamma) + .070257 * math.sin(gamma) - .006758 * math.cos(2 * gamma) + .000907 * math.sin(2 * gamma) - .002697 * math.cos(3 * gamma) + .00148 * math.sin(3 * gamma)
ha = math.radians((local_hour * 60 + eqtime + 4 * longitude - 60 * 9) / 4 - 180)
sun_elevation = math.asin(math.sin(latitude) * math.sin(decl) + math.cos(latitude) * math.cos(decl) * math.cos(ha))
sun_azimuth = (math.atan2(math.sin(ha), math.cos(ha) * math.sin(latitude) - math.tan(decl) * math.cos(latitude)) + math.pi) % (2 * math.pi)
sun_vector = Vector((math.cos(sun_elevation) * math.sin(sun_azimuth), math.cos(sun_elevation) * math.cos(sun_azimuth), math.sin(sun_elevation)))
scene['Lighting date local'] = '2026-11-15 10:00 Asia/Seoul'
scene['Approximate solar elevation degrees'] = math.degrees(sun_elevation)
scene['Approximate solar azimuth degrees clockwise from north'] = math.degrees(sun_azimuth)
scene['Season caveat'] = 'Late autumn art direction; foliage and atmospheric clarity are illustrative, not a race-day weather forecast.'
print('SOLAR_GEOMETRY', math.degrees(sun_elevation), math.degrees(sun_azimuth), flush=True)


def collection(name):
    c = bpy.data.collections.new(name)
    scene.collection.children.link(c)
    return c

terrain_collection = collection('01 | DEM landscape 1.8x')
water_collection = collection('02 | Imjin River — OSM')
forest_collection = collection('03 | Woodland')
route_collection = collection('04 | Reference GPX — elevations in metres')
light_collection = collection('05 | Dawn light and atmosphere')


def move(obj, group):
    for c in list(obj.users_collection):
        c.objects.unlink(obj)
    group.objects.link(obj)
    return obj


def surface(name, color, roughness=.8, noise=False):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (*color, 1)
    mat.use_nodes = True
    nodes, links = mat.node_tree.nodes, mat.node_tree.links
    p = nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = (*color, 1)
    p.inputs['Roughness'].default_value = roughness
    if noise:
        tex = nodes.new('ShaderNodeTexNoise')
        tex.inputs['Scale'].default_value = 3.2
        tex.inputs['Detail'].default_value = 5
        tex.inputs['Roughness'].default_value = .72
        ramp = nodes.new('ShaderNodeValToRGB')
        ramp.color_ramp.elements[0].position = .2
        ramp.color_ramp.elements[0].color = (*(v * .48 for v in color), 1)
        ramp.color_ramp.elements[1].position = .8
        ramp.color_ramp.elements[1].color = (*(min(1, v * 1.35) for v in color), 1)
        links.new(tex.outputs['Fac'], ramp.inputs[0])
        links.new(ramp.outputs['Color'], p.inputs['Base Color'])
        fine = nodes.new('ShaderNodeTexNoise')
        fine.inputs['Scale'].default_value = 160
        fine.inputs['Detail'].default_value = 3
        bump = nodes.new('ShaderNodeBump')
        bump.inputs['Strength'].default_value = .22
        bump.inputs['Distance'].default_value = .025
        links.new(fine.outputs['Fac'], bump.inputs['Height'])
        links.new(bump.outputs['Normal'], p.inputs['Normal'])
    return mat

soil = surface('Earth | muted olive, fine soil', (.14, .19, .12), noise=True)
field = surface('Fields | November stubble', (.24, .205, .13), noise=True)
forest_ground = surface('Woodland floor', (.055, .105, .065), noise=True)
leaf_mats = [surface('Canopy %s' % i, c) for i, c in enumerate([
    (.04, .105, .07), (.065, .12, .065), (.24, .16, .07), (.12, .08, .045)])]
water_mat = surface('River | soft sky reflections', (.04, .105, .14), .23)
p = water_mat.node_tree.nodes.get('Principled BSDF')
p.inputs['Metallic'].default_value = .32
tex = water_mat.node_tree.nodes.new('ShaderNodeTexNoise')
tex.inputs['Scale'].default_value = 110
bump = water_mat.node_tree.nodes.new('ShaderNodeBump')
bump.inputs['Strength'].default_value = .12
bump.inputs['Distance'].default_value = .008
water_mat.node_tree.links.new(tex.outputs['Fac'], bump.inputs['Height'])
water_mat.node_tree.links.new(bump.outputs['Normal'], p.inputs['Normal'])
asphalt = surface('Road | weathered asphalt', (.09, .105, .095), .95)
concrete = surface('Bridge | weathered concrete', (.37, .36, .30), .85)
gold = surface('Course | amber guide', (.75, .38, .08), .32)
p = gold.node_tree.nodes.get('Principled BSDF')
p.inputs['Emission Color'].default_value = (1, .42, .08, 1)
p.inputs['Emission Strength'].default_value = 2.2

T = data['terrain']
N = T['size']

def inside(x, z, polygon):
    hit = False
    for i, a in enumerate(polygon):
        b = polygon[i - 1]
        if (a[1] > z) != (b[1] > z) and x < (b[0] - a[0]) * (z - a[1]) / (b[1] - a[1]) + a[0]:
            hit = not hit
    return hit


def height(x, z):
    fx = max(0, min(N - 1.00001, (x - T['x0']) / (T['x1'] - T['x0']) * (N - 1)))
    fz = max(0, min(N - 1.00001, (z - T['z0']) / (T['z1'] - T['z0']) * (N - 1)))
    ix, iz = int(fx), int(fz)
    a, b = fx - ix, fz - iz
    h = T['heights']
    return (h[iz*N+ix]*(1-a)*(1-b)+h[iz*N+ix+1]*a*(1-b)+h[(iz+1)*N+ix]*(1-a)*b+h[(iz+1)*N+ix+1]*a*b) / 100 * 1.8


def in_bounds(x, z):
    return T['x0'] <= x <= T['x1'] and T['z0'] <= z <= T['z1']


def mesh(name, vertices, faces, mat, group):
    m = bpy.data.meshes.new(name)
    m.from_pydata(vertices, [], faces)
    m.materials.append(mat)
    obj = bpy.data.objects.new(name, m)
    group.objects.link(obj)
    return obj

vertices = []
for iz in range(N):
    for ix in range(N):
        x = T['x0'] + ix / (N-1) * (T['x1']-T['x0'])
        z = T['z0'] + iz / (N-1) * (T['z1']-T['z0'])
        wet = any(inside(x, z, poly) for poly in data['water'])
        vertices.append((x, -z, -.06 if wet else height(x, z)))
faces = [(i, i+1, i+N+1, i+N) for iz in range(N-1) for ix in range(N-1) for i in [iz*N+ix]]
land = mesh('Terrarium DEM | 181 × 181', vertices, faces, soil, terrain_collection)
for p in land.data.polygons:
    p.use_smooth = True
sub = land.modifiers.new('Smooth terrain sampling', 'SUBSURF')
sub.levels = 1
sub.render_levels = 1


def clip(poly):
    for axis, value, sign in [(0,T['x0'],1),(0,T['x1'],-1),(1,T['z0'],1),(1,T['z1'],-1)]:
        out = []
        for i,a in enumerate(poly):
            b=poly[(i+1)%len(poly)]
            ia=(a[axis]-value)*sign>=0
            ib=(b[axis]-value)*sign>=0
            if ia: out.append(a)
            if ia != ib:
                f=(value-a[axis])/(b[axis]-a[axis])
                out.append([a[0]+(b[0]-a[0])*f,a[1]+(b[1]-a[1])*f])
        poly=out
    return poly

for i, poly in enumerate(data['water']):
    poly=clip(poly)
    if len(poly)<3: continue
    vs=[Vector((p[0],-p[1], .005)) for p in poly]
    tris=tessellate_polygon([vs])
    lookup={tuple(v):j for j,v in enumerate(vs)}
    mesh('River %03d'%i,vs,[[v if isinstance(v, int) else lookup[tuple(v)] for v in tri] for tri in tris],water_mat,water_collection)

# Material regions follow the sampled terrain instead of floating square overlays.
land.data.materials.append(field)
land.data.materials.append(forest_ground)
for face in land.data.polygons:
    center = sum((land.data.vertices[i].co for i in face.vertices), Vector()) / len(face.vertices)
    x, z = center.x, -center.y
    if any(inside(x, z, poly) for poly in data['forest']): face.material_index = 2
    elif any(inside(x, z, poly) for poly in data['fields']): face.material_index = 1

# Linked crowns aggregated into one mesh: bounded memory, many irregular silhouettes.
bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1)
template=bpy.context.object
base_vs=[v.co.copy() for v in template.data.vertices]
base_fs=[tuple(p.vertices) for p in template.data.polygons]
bpy.data.objects.remove(template,do_unlink=True)
vs,fs,colors=[],[],[]
count=0
for poly in data['forest']:
    loX=max(T['x0'],min(p[0] for p in poly)); hiX=min(T['x1'],max(p[0] for p in poly))
    loZ=max(T['z0'],min(p[1] for p in poly)); hiZ=min(T['z1'],max(p[1] for p in poly))
    x=loX
    while x<hiX and count<35000:
        z=loZ
        while z<hiZ and count<35000:
            px=x+random.uniform(-.2,.2); pz=z+random.uniform(-.2,.2)
            if inside(px,pz,poly) and not any(inside(px,pz,w) for w in data['water']):
                size=random.uniform(.075,.15); j=len(vs)
                vs.extend((px+v.x*size,-pz+v.y*size,height(px,pz)+size*.8+v.z*size*1.2) for v in base_vs)
                fs.extend(tuple(j+k for k in f) for f in base_fs)
                colors.extend([random.randrange(4)]*len(base_fs))
                count+=1
            z+=.42
        x+=.42
canopy=mesh('Late autumn canopy | %s crowns'%count,vs,fs,leaf_mats[0],forest_collection)
for mat in leaf_mats[1:]: canopy.data.materials.append(mat)
for p,c in zip(canopy.data.polygons,colors):
    p.material_index=c
    p.use_smooth=True


def curve(name, points, radius, mat, group):
    c=bpy.data.curves.new(name,'CURVE'); c.dimensions='3D'
    c.bevel_depth=radius; c.bevel_resolution=2
    s=c.splines.new('POLY'); s.points.add(len(points)-1)
    for a,b in zip(s.points,points): a.co=(*b,1)
    obj=bpy.data.objects.new(name,c);group.objects.link(obj);c.materials.append(mat)
    return obj

for i,road in enumerate(data['roads']):
    if road['kind']=='river': continue
    parts=[]
    for x,z in road['points']:
        if in_bounds(x,z): parts.append((x,-z,height(x,z)+.025))
        elif len(parts)>1:
            curve('Road %03d'%i,parts,.025,asphalt,terrain_collection);parts=[]
    if len(parts)>1: curve('Road %03d'%i,parts,.025,asphalt,terrain_collection)

coords=[(p[0],-p[1],max(p[2]/100*1.8,height(p[0],p[1])+.045)+.035) for p in data['points']]
route=curve('42.261 km reference course',coords,.025,gold,route_collection)
route['Official distance km']=42.195
route['Reference distance km']=data['routeDistanceKm']
for m in data['markers']:
    p=data['points'][m['index']]
    obj=bpy.data.objects.new(m['label'],None);route_collection.objects.link(obj)
    obj.location=coords[m['index']];obj.empty_display_size=.4
    obj['Reference distance km']=p[3];obj['GPX elevation metres']=p[2]

# Same OSM endpoints and illustrative deck as the live scene.
a=Vector((-28.499,-.284,.27));b=Vector((-23.057,-7.468,.27))
for i,m in enumerate(data.get('bridgeModel',{}).get('meshes',[])):
    verts=[]
    angle=math.atan2((b-a).y,(b-a).x); length=(b-a).length; mid=(a+b)/2
    for j in range(0,len(m['positions']),3):
        x,h,z=m['positions'][j:j+3]; x*=length; yy=-z
        verts.append((mid.x+x*math.cos(angle)-yy*math.sin(angle),mid.y+x*math.sin(angle)+yy*math.cos(angle),mid.z+h))
    mesh('Bridge proxy %02d'%i,verts,[m['indices'][j:j+3] for j in range(0,len(m['indices']),3)],concrete,terrain_collection)

bpy.ops.mesh.primitive_plane_add(size=1200,location=(0,0,-.15))
continuation=move(bpy.context.object,terrain_collection)
continuation.name='Distant ground continuation — visual only'
continuation.data.materials.append(soil)

world=bpy.data.worlds.new('November 15 | cold morning sky')
scene.world=world;world.use_nodes=True
sky = world.node_tree.nodes.new('ShaderNodeTexSky')
sky.sky_type = 'MULTIPLE_SCATTERING'
sky.sun_elevation = sun_elevation
sky.sun_rotation = sun_azimuth
sky.altitude = 100
sky.air_density = 1.0
sky.aerosol_density = .45
sky.ozone_density = 1.15
sky.sun_disc = False
if hasattr(sky, 'dust_density'):
    sky.dust_density = 2.5
world.node_tree.links.new(sky.outputs['Color'],world.node_tree.nodes.get('Background').inputs[0])
world.node_tree.nodes.get('Background').inputs[1].default_value=.035
sun_data=bpy.data.lights.new('Low November sun','SUN');sun_data.energy=2.7
sun_data.color=(1,.94,.83);sun_data.angle=math.radians(.8)
sun=bpy.data.objects.new('Low November sun',sun_data);light_collection.objects.link(sun)
sun.rotation_euler=(-sun_vector).to_track_quat('-Z','Y').to_euler()
# A shallow volume gives distant slopes softer contrast while retaining foreground detail.
fog=bpy.data.materials.new('River valley haze');fog.use_nodes=True
nodes=fog.node_tree.nodes;nodes.clear()
out=nodes.new('ShaderNodeOutputMaterial');volume=nodes.new('ShaderNodeVolumePrincipled')
volume.inputs['Density'].default_value=.0007
volume.inputs['Color'].default_value=(.63,.70,.73,1)
volume.inputs['Anisotropy'].default_value=.25
fog.node_tree.links.new(volume.outputs['Volume'],out.inputs['Volume'])
bpy.ops.mesh.primitive_cube_add(size=1,location=(0,0,6))
haze=move(bpy.context.object,light_collection);haze.name='Atmospheric perspective';haze.dimensions=(190,170,14);haze.data.materials.append(fog)
haze.display_type='WIRE'

camera_data=bpy.data.cameras.new('November morning crossing | 40mm')
camera=bpy.data.objects.new('November morning crossing | 40mm',camera_data);scene.collection.objects.link(camera)
camera.location=(-49,-37,12)
target=Vector((-21,-1,2.5))
camera.rotation_euler=(target-Vector(camera.location)).to_track_quat('-Z','Y').to_euler()
camera_data.lens=40;camera_data.clip_end=1000
scene.camera=camera
scene.render.engine='CYCLES';scene.cycles.samples=40
scene.cycles.use_denoising=True
scene.render.resolution_x=1440;scene.render.resolution_y=810;scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG'
scene.render.filepath=str(output/'november-15-morning.png')
scene.view_settings.view_transform='AgX'
scene.view_settings.look='AgX - Medium High Contrast'
scene.view_settings.exposure=-.3
# No animation or timeline export; open directly in the camera view.
for screen in bpy.data.screens:
    for area in screen.areas:
        if area.type=='VIEW_3D':
            area.spaces.active.region_3d.view_perspective='CAMERA'
            area.spaces.active.shading.type='MATERIAL'
            area.spaces.active.clip_end=1000
notes=bpy.data.texts.new('READ ME — November 15, sources and elevation')
notes.write('Late autumn morning study — November 15, 2026 at 10:00 KST. NOAA approximate solar geometry; foliage and haze are art direction. No animation render.\\nReference GPX is not an official survey.\\nTerrain exaggerated 1.8x; numeric marker elevations remain unscaled GPX values.\\nBridge architecture is illustrative.\\n'+json.dumps(data['sources'],indent=2))
bpy.ops.wm.save_as_mainfile(filepath=str(output/'sonkeechung-november-15.blend'))
print('SCENE_SAVED',output/'sonkeechung-november-15.blend',flush=True)
bpy.ops.render.render(write_still=True)
print('STILL_SAVED',scene.render.filepath,flush=True)

# The default workspace opens the still; Modeling retains the editable 3D scene.
preview = bpy.data.images.load(scene.render.filepath, check_existing=True)
preview.pack()
for workspace in bpy.data.workspaces:
    if workspace.name == 'Layout':
        for screen in workspace.screens:
            areas = [area for area in screen.areas if area.type == 'VIEW_3D']
            if areas:
                area = max(areas, key=lambda area: area.width * area.height)
                area.type = 'IMAGE_EDITOR'
                area.spaces.active.image = preview
        workspace.name = 'November 15 preview'
bpy.ops.wm.save_as_mainfile(filepath=str(output/'sonkeechung-november-15.blend'))
