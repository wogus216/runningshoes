"""Georeference open Sentinel-2 imagery, Copernicus DEM and OSM structures.
Run in a Python environment with rasterio, numpy and Pillow. No account or key.
uv run --with rasterio --with pillow real-environment.py ROOT
"""
import concurrent.futures
import json
import math
import pathlib
import sys
import urllib.parse
import urllib.request
import numpy as np
import rasterio
from rasterio.vrt import WarpedVRT
from rasterio.transform import from_bounds
from rasterio.enums import Resampling
from PIL import Image

root = pathlib.Path(sys.argv[1]).resolve()
folder = root / 'public/data/sonkeechung'
cache = root / '.omc/research/sonkeechung-course'
base_file=cache/'base-course.json'
if not base_file.exists(): base_file.write_bytes((folder/'course.json').read_bytes())
course = json.loads(base_file.read_text())
bbox = course['bbox']
origin = course['origin']

def request_json(url):
    req=urllib.request.Request(url,headers={'User-Agent':'allrunabout-course-preview/1.0 (+https://allrunabout.com)'})
    with urllib.request.urlopen(req,timeout=100) as response:
        return json.load(response)

def catalog(name,collection,extra=None):
    file=cache/name
    if not file.exists():
        params={'collections':collection,'bbox':','.join(map(str,bbox)),'limit':100,**(extra or {})}
        result=request_json('https://earth-search.aws.element84.com/v1/search?'+urllib.parse.urlencode(params))
        file.write_text(json.dumps(result))
    return json.loads(file.read_text())

search = catalog('satellite-search.json','sentinel-2-l2a',{'datetime':'2025-11-12T00:00:00Z/2025-11-12T23:59:59Z'})
items = [f for f in search['features'] if '20251112' in f['id']]
if not items: raise RuntimeError('No November 12 satellite acquisitions found')
items.sort(key=lambda f:f['properties'].get('eo:cloud_cover',100))
width = 2048
height = round(width * (bbox[3]-bbox[1]) / ((bbox[2]-bbox[0]) * math.cos(math.radians(origin[1]))))
env = {'GDAL_DISABLE_READDIR_ON_OPEN':'EMPTY_DIR','CPL_VSIL_CURL_ALLOWED_EXTENSIONS':'.tif','GDAL_HTTP_MAX_RETRY':3,'GDAL_HTTP_RETRY_DELAY':1,'AWS_NO_SIGN_REQUEST':'YES'}

def imagery(item):
    with rasterio.Env(**env):
        with rasterio.open(item['assets']['visual']['href']) as src:
            with WarpedVRT(src,crs='EPSG:4326',transform=from_bounds(*bbox,width,height),width=width,height=height,resampling=Resampling.bilinear,src_nodata=0,nodata=0) as vrt:
                image=vrt.read([1,2,3])
    print('SATELLITE_TILE',item['id'],flush=True)
    return image

texture = folder/'satellite-2025-11-12.jpg'
if not texture.exists():
    images = list(concurrent.futures.ThreadPoolExecutor(max_workers=4).map(imagery,items))
    image=np.zeros_like(images[0]);covered=np.zeros((height,width),dtype=bool)
    for im in images:
        valid=np.any(im>0,axis=0) & ~covered
        image[:,valid]=im[:,valid];covered|=valid
    coverage=float(covered.mean())
    if coverage < .999: raise RuntimeError(f'Incomplete satellite coverage: {coverage}')
    texture_image=Image.fromarray(image.transpose(1,2,0))
    for quality in (80,75,70,65,60,55,50,45,40):
        texture_image.save(texture,quality=quality,subsampling=2,optimize=True)
        if texture.stat().st_size <= 500*1024: break
    if texture.stat().st_size > 500*1024: raise RuntimeError('Satellite texture exceeds web image budget')
    print('SATELLITE_COVERAGE',coverage,'SIZE',width,height,flush=True)

# One public 1-degree COG contains this whole course, sampled at ~30m spacing.
dem_file=cache/'copernicus-terrain.json'
if dem_file.exists():
    terrain=json.loads(dem_file.read_text())
else:
    item=catalog('dem-search.json','cop-dem-glo-30')['features'][0]
    href=item['assets']['data']['href'].replace('s3://copernicus-dem-30m/','https://copernicus-dem-30m.s3.eu-central-1.amazonaws.com/')
    size=513
    with rasterio.Env(**env):
        with rasterio.open(href) as src:
            with WarpedVRT(src,crs='EPSG:4326',transform=from_bounds(*bbox,size,size),width=size,height=size,resampling=Resampling.bilinear) as vrt:
                heights=vrt.read(1).astype(float)
    if not np.all(np.isfinite(heights)) or heights.min() < -20 or heights.max()>700:
        raise RuntimeError('Unexpected DEM values')
    terrain={**course['terrain'],'size':size,'heights':np.maximum(0,heights).round(2).ravel().tolist(),'processing':'Copernicus DEM GLO-30 DSM, bilinear resampling, negative values floored at zero; unexaggerated heights','sourceUrl':href}
    dem_file.write_text(json.dumps(terrain,separators=(',',':')))
    print('DEM_RANGE',float(heights.min()),float(heights.max()),flush=True)

structures_file=cache/'structures.json'
if structures_file.exists():
    osm=json.loads(structures_file.read_text())
else:
    box=f'{bbox[1]},{bbox[0]},{bbox[3]},{bbox[2]}'
    query=f'[out:json][timeout:80];(way["building"]({box});way["highway"~"^(trunk|primary|secondary|tertiary|residential|unclassified|service)$"]({box});way["railway"="rail"]({box}););out geom;'
    failure=None
    for endpoint in ['https://overpass.kumi.systems/api/interpreter','https://overpass-api.de/api/interpreter']:
        try:
            osm=request_json(endpoint+'?data='+urllib.parse.quote(query))
            structures_file.write_text(json.dumps(osm))
            break
        except Exception as exc:
            failure=exc
            print('OSM_ENDPOINT_FAILED',endpoint,type(exc).__name__,flush=True)
    else:
        osm=request_json('https://www.openstreetmap.org/api/0.6/map.json?bbox=126.7,37.866,126.845,37.951')
        nodes={e['id']:e for e in osm['elements'] if e['type']=='node'}
        for e in osm['elements']:
            if e['type']=='way': e['geometry']=[{'lon':nodes[i]['lon'],'lat':nodes[i]['lat']} for i in e.get('nodes',[]) if i in nodes]
        osm['elements']=[e for e in osm['elements'] if e['type']=='way' and e.get('geometry')]
        structures_file.write_text(json.dumps(osm))

def project(lon,lat):
    return [round((lon-origin[0])*111195*math.cos(math.radians(origin[1]))/100,4),round((origin[1]-lat)*111195/100,4)]

def number(value):
    try:return float(str(value).split(';')[0].replace('m','').strip())
    except (ValueError,TypeError):return None

buildings=[];roads=[];railways=[]
for element in osm.get('elements',[]):
    tags=element.get('tags',{});geometry=element.get('geometry',[])
    if len(geometry)<2:continue
    points=[project(p['lon'],p['lat']) for p in geometry]
    if 'building' in tags and len(points)>3:
        h=number(tags.get('height'));levels=number(tags.get('building:levels'))
        estimated=h is None
        h=h if h is not None else levels*3 if levels else 5 if tags['building'] in ['shed','farm_auxiliary','garage'] else 7
        buildings.append({'id':element['id'],'kind':tags['building'],'points':points,'heightM':max(2,min(100,h)),'heightEstimated':estimated,'name':tags.get('name','')})
    elif tags.get('railway')=='rail':railways.append({'points':points})
    elif 'highway' in tags:
        lanes=number(tags.get('lanes'))
        roadwidth=number(tags.get('width')) or (lanes*3.2 if lanes else 14 if tags['highway'] in ['trunk','primary'] else 7 if tags['highway'] in ['secondary','tertiary'] else 4)
        roads.append({'kind':tags['highway'],'bridge':tags.get('bridge','no')!='no','widthM':roadwidth,'points':points})

course['terrain']=terrain
for p in course['points']:
    t=terrain;size=t['size']
    fx=max(0,min(size-1.00001,(p[0]-t['x0'])/(t['x1']-t['x0'])*(size-1)))
    fz=max(0,min(size-1.00001,(p[1]-t['z0'])/(t['z1']-t['z0'])*(size-1)))
    ix,iz=int(fx),int(fz);a,b=fx-ix,fz-iz;h=t['heights']
    p[4]=round(h[iz*size+ix]*(1-a)*(1-b)+h[iz*size+ix+1]*a*(1-b)+h[(iz+1)*size+ix]*(1-a)*b+h[(iz+1)*size+ix+1]*a*b,3)
course['verticalScale']=1
course['buildings']=buildings
coverage=osm.get('bounds')
if coverage:
    x0,z1=project(coverage['minlon'],coverage['minlat'])
    x1,z0=project(coverage['maxlon'],coverage['maxlat'])
    roads.extend(road for road in course['roads'] if not all(x0<=x<=x1 and z0<=z<=z1 for x,z in road['points']))
course['structureCoverage']=coverage
course['roads']=roads
course['railways']=railways
course['imagery']={'url':'/data/sonkeechung/'+texture.name,'date':'2025-11-12','resolutionM':10,'width':width,'height':height,'bbox':bbox,'attribution':'Contains modified Copernicus Sentinel data (2025), processed by Element 84','license':'https://dataspace.copernicus.eu/terms-and-conditions','items':[{'id':i['id'],'url':i['assets']['visual']['href']} for i in items]}
course['sources']['terrain']='https://registry.opendata.aws/copernicus-dem/'
course['sources']['imagery']='https://registry.opendata.aws/sentinel-2-l2a-cogs/'
course['caveats']=[s for s in course['caveats'] if '1.8' not in s]
course['caveats'].extend(['주변 위성영상은 2025-11-12 촬영본이며 2026년 대회 당일의 모습이 아닙니다.','건물 배치는 OpenStreetMap 기준이며 높이는 대부분 추정값이고 외벽은 단순화했습니다.','지형은 약 30m 간격 DSM이며 도로 노면의 실측 고도가 아닙니다. 높이 과장 없이 표현합니다.'])
course['terrain']['attribution']='produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved'
course['attribution']='Route: RUNRUUN · © OpenStreetMap contributors · Contains modified Copernicus Sentinel data (2025) · Copernicus DEM GLO-30'
(folder/'course.json').write_text(json.dumps(course,separators=(',',':'),ensure_ascii=False))
(cache/'environment-audit.json').write_text(json.dumps({'buildings':len(buildings),'knownBuildingHeights':sum(not b['heightEstimated'] for b in buildings),'roads':len(roads),'railways':len(railways),'imageryDate':'2025-11-12','terrainSize':terrain['size'],'verticalScale':1},indent=2))
print('ENVIRONMENT_READY',len(buildings),'buildings',len(roads),'roads',len(railways),'railways',flush=True)
