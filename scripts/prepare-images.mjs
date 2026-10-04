import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const source = new URL('../design/source-images/', import.meta.url);
const destination = new URL('../src/assets/', import.meta.url);
await mkdir(destination, { recursive: true });
// Keep originals intact. Only the three illustrations still in use are extracted.
// London, beach and Hogwarts use supplied photos through Astro Image.
const scenes = [[1, 'terrazas-arroz'], [2, 'escapada-europea'], [3, 'viaje-familia']];
for (const [index, name] of scenes) {
  await sharp(fileURLToPath(new URL('escenas-ilustrativas-3x2.png', source)))
    .extract({ left: (index % 3) * 512, top: Math.floor(index / 3) * 512, width: 512, height: 512 })
    .webp({ quality: 88 }).toFile(fileURLToPath(new URL(`${name}.webp`, destination)));
}
// Remove transparent outer padding, preserving colors, shapes and scale.
for (const name of ['archer-travel', 'evolution-travel']) {
  await sharp(fileURLToPath(new URL(`${name}.png`, source))).trim({ background: '#00000000', threshold: 0 })
    .webp({ lossless: true }).toFile(fileURLToPath(new URL(`${name}.webp`, destination)));
}
console.log('Prepared three native-resolution illustrations and two logos.');
