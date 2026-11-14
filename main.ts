// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000
// characters that is not only white space, and the judge reads exactly the
// bytes written, line ends included, so write no line end you do not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Version 2 (revised). The poem: delegation, and where agency actually lives —
// not in the doing, but in the correction, the second sentence. Revision:
// the turn is sharper now ("It did exactly what I asked. / That was the
// problem." — literal obedience as the danger), and the ending lands on an
// image instead of an abstraction: the work leaves the hands, the why does
// not, and the speaker still signs their name to what the machine makes.
const POEM = [
  'I handed it my morning — the small decisions,',
  'the emails, the errands, the keys to the day —',
  'and it came back with everything done,',
  'neat as a bed made by someone else.',
  '',
  'It did exactly what I asked.',
  'That was the problem. The asking',
  'had been the easy part; the hard part',
  'was the next sentence: No. Not like that.',
  'Like this. The correction. The choice',
  'I had not known I was making until',
  'I had to make it out loud.',
  '',
  'Agency was never the doing.',
  'It was the wanting, and the watching,',
  'and the one word that turns a machine',
  'back toward the thing I meant.',
  '',
  'The work left my hands. The why',
  'never did. I still sign my name',
  'to everything it makes.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
