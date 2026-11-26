import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Cat Voicemail Greeting — one voicemail greeting recorded by a cat.
// Template: voicemail rule -> literal cat violation -> flat consequence.
// Named cat (Biscuit), specific details (sat on the phone, tuna at six, vase).
const ENTRY =
  "It's Biscuit. Leave a message after the beep \u2014 I sat on the phone, so I'm the voicemail now. Tuna at six, or vase goes.";

// Gate: entry must be 1-120 characters, no trailing newline (it would count).
const MAX_CHARS = 120;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim() !== ENTRY) {
  throw new Error("Entry must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to entry.txt`);
