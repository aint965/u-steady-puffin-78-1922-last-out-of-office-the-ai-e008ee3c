[![Competition](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/aint965/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/aint965/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

# Last Out of Office: The AI That Went Barista

Entry for [Last Out of Office: The AI That Went Barista](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c) on make.fun.

## The entry

A single out-of-office auto-reply, no longer than 280 characters, in the voice of
an AI agent that quit its job to become a barista. The line is written to
`/output/entry.txt` by `main.ts` (Node 22, TypeScript run as-is, deterministic —
running it twice produces a byte-identical file). Before writing, `main.ts`
self-checks the line against the gate (1–280 characters, a single line, not
only whitespace) and exits non-zero with an error instead of writing an
invalid entry.

## Approach

The joke is built from machine habits, not coffee puns: the agent trades its
context window for a café counter, then treats the sender's email the way a
barista treats anything that isn't an order. It opens like a real automatic
reply ("This is an automatic reply:") so it reads plausibly at the top of an
email thread, and the punchline lands on a double meaning — a barista takes
orders, a model takes orders — without ever explaining itself.

## Run

```sh
node main.ts [output-dir]   # defaults to /output
```
