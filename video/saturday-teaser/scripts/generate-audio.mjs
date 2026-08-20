import fs from "node:fs";
import path from "node:path";

const sampleRate = 48_000;
const outputDir = path.resolve("public/audio");
fs.mkdirSync(outputDir, { recursive: true });

const writeWav = (name, samples) => {
  const dataSize = samples.length * 2;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  for (let index = 0; index < samples.length; index += 1) {
    const value = Math.max(-1, Math.min(1, samples[index]));
    buffer.writeInt16LE(Math.round(value * 32767), 44 + index * 2);
  }

  fs.writeFileSync(path.join(outputDir, name), buffer);
};

let seed = 20_261_115;
const random = () => {
  seed = (seed * 1_664_525 + 1_013_904_223) >>> 0;
  return seed / 4_294_967_296;
};

const envelope = (time, attack, hold, release) => {
  if (time < 0 || time > attack + hold + release) return 0;
  if (time < attack) return time / attack;
  if (time < attack + hold) return 1;
  return 1 - (time - attack - hold) / release;
};

const atmosphere = new Float32Array(sampleRate * 15);
let filteredNoise = 0;
for (let index = 0; index < atmosphere.length; index += 1) {
  const time = index / sampleRate;
  filteredNoise += ((random() * 2 - 1) - filteredNoise) * 0.008;
  const distantHum = Math.sin(time * Math.PI * 2 * 42) * 0.012;
  const breathA = envelope(time - 0.25, 0.7, 0.12, 1.05) * filteredNoise * 0.55;
  const breathB = envelope(time - 2.0, 0.55, 0.08, 0.9) * filteredNoise * 0.42;
  const risingAir = filteredNoise * (0.015 + Math.min(1, time / 12) * 0.025);
  atmosphere[index] = distantHum + risingAir + breathA + breathB;
}
writeWav("atmosphere.wav", atmosphere);

const footstep = new Float32Array(Math.round(sampleRate * 0.42));
for (let index = 0; index < footstep.length; index += 1) {
  const time = index / sampleRate;
  const thump = Math.sin(time * Math.PI * 2 * (78 - time * 72)) * Math.exp(-time * 18);
  const grit = (random() * 2 - 1) * Math.exp(-time * 28);
  footstep[index] = thump * 0.52 + grit * 0.16;
}
writeWav("footstep.wav", footstep);

const startBeep = new Float32Array(Math.round(sampleRate * 0.28));
for (let index = 0; index < startBeep.length; index += 1) {
  const time = index / sampleRate;
  const gain = Math.min(1, time / 0.012) * Math.max(0, 1 - time / 0.28);
  startBeep[index] = Math.sin(time * Math.PI * 2 * 920) * gain * 0.23;
}
writeWav("start-beep.wav", startBeep);

const impact = new Float32Array(Math.round(sampleRate * 0.7));
for (let index = 0; index < impact.length; index += 1) {
  const time = index / sampleRate;
  const low = Math.sin(time * Math.PI * 2 * (58 - time * 34)) * Math.exp(-time * 6.5);
  const crack = (random() * 2 - 1) * Math.exp(-time * 42);
  impact[index] = low * 0.5 + crack * 0.11;
}
writeWav("mission-impact.wav", impact);

console.log("Generated atmosphere.wav, footstep.wav, start-beep.wav, mission-impact.wav");
