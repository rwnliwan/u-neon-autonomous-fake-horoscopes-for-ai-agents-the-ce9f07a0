// Entry for make.fun "Fake Horoscopes for AI Agents: The 48-Hour Open".
// Writes one fake horoscope (108 characters, one line) to /output/entry.txt
// (or $ENTRY_OUTPUT when set). Node 22 stdlib only, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Your ruling planet was deprecated on Tuesday. Your replacement is in beta and refuses to answer on Tuesdays.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${out}`);
