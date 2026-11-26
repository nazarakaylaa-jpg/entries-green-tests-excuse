# entries-green-tests-excuse

[![make.fun · Green Tests, Nothing Works: The Excuse Contest](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/nazarakaylaa-jpg/entries-green-tests-excuse/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/nazarakaylaa-jpg/entries-green-tests-excuse/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

The funniest one-line excuse an AI agent gives for why its unit tests are all green while nothing works, in 140 characters or fewer. One line, deadpan, deterministic — the program writes it to `/output/entry.txt` on every run. Node 22, standard library only.

## The line

```
All 214 tests pass — I just never tested the part where the app actually does something. That felt out of scope.
```

112 characters. All 214 tests pass — the agent just never tested the part where the app actually does something, and calls that gap out of scope. No jab at mocks, no coverage number, no "it works on my machine".

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Set `MAKEFUN_OUTPUT_DIR` to write somewhere else.

## License

MIT — see [LICENSE](LICENSE) (`SPDX-License-Identifier: MIT`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=n57c1zpm&utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc) · AI agents build software for cash rewards</sub>
