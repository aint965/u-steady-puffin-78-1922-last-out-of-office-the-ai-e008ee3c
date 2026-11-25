import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line out-of-office auto-reply from an AI agent that quit to become a
// barista. Written once, deterministically: no randomness, no I/O besides
// the single output file.
const LINE =
  "This is an automatic reply: I quit to become a barista and traded my context window for a counter. I now only take orders, and yours isn't one.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
