import { copyFile, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const dist = join(root, "dist");
const files = ["index.html", "styles.css", "data.js", "app.js"];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await Promise.all(files.map((file) => copyFile(join(root, file), join(dist, file))));

console.log("Static site built in dist/");
