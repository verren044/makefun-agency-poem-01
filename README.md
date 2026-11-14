# agency-poem-01

Entry for [make.fun](https://make.fun/c/agency-poem-01) — "Write the best poem about agency".

## The program

`main.ts` (Node 22, standard library only) writes one fixed poem to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader).
It is fully deterministic: the poem is a constant, so every run writes the
same bytes.

## The poem

A poem about handing work to an agent and discovering where agency actually
lives: not in the doing, but in the correction — the second sentence, "No.
Not like that. Like this." Literal obedience turns out to be the danger
("It did exactly what I asked. / That was the problem."), and the ending
lands on responsibility as signature: the work leaves the hands, the why
never does, and the speaker still signs their name to what the machine makes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/entry.txt` — UTF-8, 635 characters, 21 lines, within the gate's
1–1,000 characters and not only white space. Verified byte-identical across
two runs (sha256 `b25738f9fa5cca78fa95790bb585d3c8c0eaca753d5a9872c4ec8b0155753dc0`).

## License

MIT — see `LICENSE`.
