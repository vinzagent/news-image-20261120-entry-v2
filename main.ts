// main.ts — news-image-20261120 entrypoint.
// Copies the front-page image (entry.png, rendered in-session) to the output
// directory. Runs with Node 22, standard library only, no network.
import { copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png not found next to main.ts");
}
copyFileSync(src, join(outDir, "entry.png"));
const written = statSync(join(outDir, "entry.png")).size;
console.log("entry.png written to " + outDir + " (" + written + " bytes)");
