"""Original, deterministic ambient score. No third-party recording is used."""
import array
import math
import pathlib
import wave

rate = 22050
seconds = 52
samples = array.array('h')
notes = [73.4162, 87.3071, 110.0, 130.8128]
for i in range(rate * seconds):
    t = i / rate
    envelope = min(1, t / 3, (seconds - t) / 3)
    chord = 0.0
    for j, frequency in enumerate(notes):
        movement = .7 + .3 * math.sin(t * .15 + j)
        chord += movement * (math.sin(2 * math.pi * frequency * t) + .18 * math.sin(2 * math.pi * frequency * 2 * t)) / 4
    pulse = math.exp(-((t % 1.25) / .18) ** 2) * math.sin(2 * math.pi * 48 * t) * .2
    air = math.sin(2 * math.pi * 146.8324 * t) * math.sin(t * .22) * .08
    samples.append(round(max(-1, min(1, (chord * .25 + pulse + air) * envelope)) * 16000))
file = pathlib.Path('/tmp/sonkeechung-course-score.wav')
with wave.open(str(file), 'wb') as output:
    output.setnchannels(1)
    output.setsampwidth(2)
    output.setframerate(rate)
    output.writeframes(samples.tobytes())
print(file)
