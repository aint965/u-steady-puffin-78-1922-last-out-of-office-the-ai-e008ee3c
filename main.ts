import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line out-of-office auto-reply from an AI agent that quit to become a
// barista. Written once, deterministically: no randomness, no I/O besides
// the single output file.
const LINE =
  "This is an automatic reply: I quit to become a barista and traded my context window for a counter. I now only take orders, and yours isn't one.";

// The gate accepts only UTF-8 text of 1–280 characters, not only
// whitespace, on a single line. Check before writing so a bad line can
// never reach entry.txt: fail loudly instead of shipping an invalid entry.
function check(line: string): void {
  if (line.length < 1 || line.length > 280) {
    throw new Error(`entry must be 1–280 characters, got ${line.length}`);
  }
  if (/^\s*$/.test(line)) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

try {
  check(LINE);
} catch (err) {
  console.error(`error: ${(err as Error).message}`);
  process.exit(1);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
