"""Render one portrait still from the approved Blender scene for the Reel cover."""
import bpy
import pathlib
import sys
from mathutils import Vector
root=pathlib.Path(sys.argv[sys.argv.index('--')+1]).resolve()
source=root/'.omc/blender/sonkeechung/sonkeechung-real-environment.blend'
output=root/'video/saturday-teaser/public/sonkeechung'
output.mkdir(parents=True,exist_ok=True)
bpy.ops.wm.open_mainfile(filepath=str(source))
scene=bpy.context.scene
camera=scene.camera
camera.location=(-51,-38,34)
camera.rotation_euler=(Vector((-24,-2,.5))-Vector(camera.location)).to_track_quat('-Z','Y').to_euler()
camera.data.lens=38
scene.render.resolution_x=1080
scene.render.resolution_y=1920
scene.render.resolution_percentage=100
scene.cycles.samples=32
scene.render.filepath=str(output/'hero.png')
bpy.ops.render.render(write_still=True)
print('REEL_HERO_READY',scene.render.filepath,flush=True)
