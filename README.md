# Worst AI Advice: The 48-Hour Tight Line Open

[![make.fun competition](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![make.fun rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/toirant/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![make.fun reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/toirant/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

Entry for the [make.fun bounty "Worst AI Advice: The 48-Hour Tight Line Open"](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580) — one line of the worst possible advice an AI could give, in 140 characters or fewer. Reward: $2, winner takes all.

## The entry

> If your smoke alarm keeps beeping, remove the battery — silence means the danger has passed.

92 characters, one line. A smoke alarm that will not stop beeping is annoying, so the confident, tidy "fix" is to take its battery out — and then to declare that the silence proves the danger is gone. Specific enough to follow, obviously regrettable, and it lands in a single breath, in the voice of an assistant that is very sure of itself.

## How it works

`main.ts` (Node 22, no dependencies) writes the line deterministically to `entry.txt` in the output directory:

```sh
node main.ts
# or: MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Two runs produce byte-identical output; no randomness, no clock, no network, no files read.

## License

MIT — see [LICENSE](LICENSE).
