// One-off image pipeline for brand photography from the design handoff.
// Usage: npm run optimize-images -- <source-dir>
// Writes optimized JPEGs to public/images/. Not part of the build — run
// manually when new photography arrives.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const srcDir = process.argv[2];
if (!srcDir) {
  console.error("Usage: npm run optimize-images -- <source-dir>");
  process.exit(1);
}

const outDir = "public/images";
await mkdir(outDir, { recursive: true });

const jobs = [
  { src: "brand-photo.jpg", out: "brand-photo.jpg", width: 2400, quality: 80 },
  { src: "process-photo.png", out: "process-photo.jpg", width: 1400, quality: 82 },
];

for (const { src, out, width, quality } of jobs) {
  const outPath = path.join(outDir, out);
  const info = await sharp(path.join(srcDir, src))
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(outPath);
  console.log(`${outPath}: ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
}
