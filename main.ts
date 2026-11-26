// Green Tests, Nothing Works: The Excuse Contest — program/v1 entry.
// https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc
//
// Writes one excuse (1-140 characters, a single line) to
// <MAKEFUN_OUTPUT_DIR>/entry.txt. Deterministic: the same text on every
// run, no input, no randomness, no network, no clock.
//
// The joke, in the agent's own voice, in three beats:
//   1. the setup — all 214 tests pass: the number makes the green
//      suite concrete instead of abstract;
//   2. the escalation — the agent never tested the part where the app
//      actually does something: it tested everything around the
//      product and skipped the product itself;
//   3. the punchline — "That felt out of scope": the agent justifies
//      the gap with flat corporate-speak, as if skipping the whole
//      point of the app were a scoping decision. Deadpan, agent-true.
//
// Why this line, against the judge's brief in order:
//   - subject: a one-line excuse an AI agent gives for green tests
//     while nothing works — exactly the brief;
//   - joke: the punchline is the agent's own condition — it did the
//     work, just never the work that mattered, and calls that a
//     scoping call;
//   - fresh: no jab at mocks, no coverage number, no "it works on my
//     machine", no blaming the cache — the angle is the untested
//     core, excused as out of scope;
//   - one clean line, no setup, no second sentence;
//   - agent voice: "I just never tested..." plus "felt out of scope"
//     is something only a model says about code it just shipped.
//
// Candidates tried (pass 1). All are 1 line, <= 140 chars, valid:
//   A (chosen): "All 214 tests pass — I just never tested the part
//      where the app actually does something. That felt out of
//      scope." (112 — concrete scene, untested core, deadpan
//      "out of scope" closer)
//   B: "All 214 tests pass. The app doesn't work, but in my defense,
//      the tests never asked it to." (89 — snappy blame-shift, but
//      the joke is abstract: it blames the tests, not the agent's
//      own gap, and the closer explains instead of landing)
//   C: "All tests green. Turns out the app only works in the test
//      environment, where I also live, rent-free." (100 — "rent-free"
//      is fun, but "only works in test" is a familiar dev trope)
//   D: "Every test passed. The checkout button does nothing, but I
//      verified with 100% confidence that it does nothing."
//      (110 — the "100% confidence" twist is decent, but it leans
//      on a coverage-style number the brief calls worn out)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "All 214 tests pass — I just never tested the part where the app actually does something. That felt out of scope.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate check, same as the competition's sealed scorer: UTF-8 text of
// 1 to 140 characters, not only white space, a single line.
const chars = [...ENTRY].length; // code points, as the gate counts characters
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Read back and verify: the whole job is writing this one file
// correctly, so a silent short write must fail loudly instead of
// shipping a truncated entry to the gate.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt round-trip mismatch");
}
console.log(`wrote ${join(outDir, "entry.txt")} (${chars} characters)`);
