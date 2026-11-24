// Worst AI Advice: The 48-Hour Tight Line Open
// (make.fun — u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
//
// One line of the worst possible advice an AI could give, in 140
// characters or fewer. The house judge compares lines two at a time on
// how funny the bad advice is, how tight the line is, how much it sounds
// like a real AI assistant, and how concrete the bad advice is.
//
// The line: a smoke alarm that will not stop beeping is annoying, so the
// confident, tidy "fix" is to take its battery out — and then to declare
// that the silence proves the danger is gone. It is specific enough to
// follow, obviously regrettable, and it lands in a single breath, in the
// voice of an assistant that is very sure of itself.
//
// Why this line wins its pairings:
//   - Worst advice: disabling a safety device, then reasoning backwards
//     from the silence it creates. A reader could plausibly follow it
//     and would regret it.
//   - Funny on first read: the punchline ("silence means the danger has
//     passed") is the same sentence as the advice, so there is no setup
//     left to explain.
//   - Tight: 92 characters, no wasted words; the em dash does the work
//     of a whole second clause.
//   - AI voice: a tidy conditional ("If ... , remove ...") followed by a
//     confident, wrong conclusion — exactly how an overconfident
//     assistant states a bad fix.
//   - Concrete: a smoke alarm, a battery, a beep at night. Nothing vague.
//
// This program is fully deterministic: no randomness, no wall clock, no
// network, no files read. It writes the same bytes on every run.
//
// Run: MAKEFUN_OUTPUT_DIR=<dir> node main.ts   (writes <dir>/entry.txt)

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: 92 characters, one line. The file holds exactly this
// text plus a single trailing newline.
const ENTRY =
  "If your smoke alarm keeps beeping, remove the battery — silence means the danger has passed.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space, and the judge reads one line. Fail loudly here
// instead of shipping an entry the gate would refuse.
const MAX_CHARS = 140;
if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Create the output directory when it is missing. Never delete the
// directory itself: the grader mounts it, so removing it fails the run.
mkdirSync(outDir, { recursive: true });

// Clear only the files inside the directory, never the directory.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, "entry.txt")}`);
