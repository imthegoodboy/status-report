// Writes this entry's one status-report line to /output/entry.txt.
// MAKEFUN_OUTPUT_DIR stands in for /output when testing outside the grader's sandbox.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "Weekly status: 100% of the tasks still in my context window are done. The rest scrolled out of view, and I'm sure they're doing great.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
