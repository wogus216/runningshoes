"""A restrained bridge proxy for the preview, not an architectural survey."""
import bpy
import json
import pathlib
import sys

root = pathlib.Path(sys.argv[sys.argv.index('--') + 1])
output = root / 'public/data/sonkeechung'
output.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

def material(name, color):
    value = bpy.data.materials.new(name)
    value.diffuse_color = (*color, 1)
    return value

concrete = material('Warm concrete', (.56, .57, .51))
road = material('Asphalt', (.29, .32, .29))
rail = material('Rail', (.67, .69, .63))

def box(name, position, dimensions, surface):
    bpy.ops.mesh.primitive_cube_add(size=1, location=position)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(surface)
    return obj

box('Bridge deck', (0, 0, 0), (1, .23, .025), concrete)
box('Road surface', (0, 0, .014), (1, .205, .003), road)
for y in [-.11, .11]:
    box('Guardrail', (0, y, .032), (1, .008, .022), rail)
for i in range(9):
    x = -.44 + i * .11
    box('Pier cap', (x, 0, -.033), (.014, .215, .04), concrete)
    for y in [-.065, .065]:
        box('Concrete pier', (x, y, -.12), (.009, .027, .18), concrete)

bpy.context.view_layer.update()
meshes = []
for obj in bpy.context.scene.objects:
    if obj.type != 'MESH':
        continue
    mesh = obj.data
    mesh.calc_loop_triangles()
    positions = []
    for vertex in mesh.vertices:
        p = obj.matrix_world @ vertex.co
        positions.extend([round(p.x, 6), round(p.z, 6), round(-p.y, 6)])
    indices = [index for triangle in mesh.loop_triangles for index in triangle.vertices]
    color = list(obj.data.materials[0].diffuse_color[:3])
    meshes.append({'positions': positions, 'indices': indices, 'color': color})
(output / 'bridge.json').write_text(json.dumps({'note': 'Visual bridge proxy; dimensions and architecture are illustrative.', 'meshes': meshes}, separators=(',', ':')))
bpy.ops.export_scene.gltf(filepath=str(output / 'bridge.glb'), export_format='GLB')
print('BRIDGE_MODEL', len(meshes), 'meshes')
