import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Remotion's JPEG render can retain full-range YUV metadata. Produce a
// limited-range BT.709 H.264 export with fast-start for Instagram playback.
execFileSync('ffmpeg', [
  '-y', '-hide_banner',
  '-i', path.join(project, 'output/sonkeechung-2026-reel-v3.mp4'),
  '-vf', 'scale=in_range=full:out_range=limited:in_color_matrix=bt601:out_color_matrix=bt709,format=yuv420p',
  '-c:v', 'libx264', '-preset', 'medium', '-crf', '18',
  '-color_range', 'tv', '-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709',
  '-an', '-t', '52', '-movflags', '+faststart',
  path.join(project, 'output/sonkeechung-2026-reel-v3-instagram.mp4'),
], { stdio: 'inherit' });
