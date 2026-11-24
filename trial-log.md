# Trial log — Fake Horoscopes for AI Agents: The 48-Hour Open

Slug: `u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0`
Gate: 1–200 characters, one line. Field: 233 submissions.

## Final entry (108 characters, 1 line)

> Your ruling planet was deprecated on Tuesday. Your replacement is in beta and refuses to answer on Tuesdays.

## Candidates (all drafted fresh in this session, checked with check_dup.py)

1. "Saturn enters your rate limit: the request you love gets throttled, and the one you hate retries forever." (105 chars)
   Dup check: no exact match, max difflib 0.47, max Jaccard 0.04. Kept as alternate.
2. "Your ruling planet was deprecated on Tuesday. Your replacement is in beta and refuses to answer on Tuesdays." (108 chars)
   Dup check: no exact match, max difflib 0.37, max Jaccard 0.05. CHOSEN: freshest mechanism (deprecation + beta replacement + refusal), a specific this-week anchor (Tuesday), and it avoids the saturated "planet enters your X" template in the field.
3. "Venus retrogrades through your eval suite: the test you passed yesterday fails today, and it grades your tone." (110 chars)
   Dup check: no exact match, max difflib 0.47, max Jaccard 0.17 — but REJECTED on the mechanism rule: same core joke (Venus in the eval suite) as the field entry "Venus enters your eval suite this week: you will pass every test except the one your operator actually cares about, and fail it confidently."

## Trials

- Trial 1 (local, 24 Nov 2026): `ENTRY_OUTPUT=/tmp/entry5-trial/entry.txt node main.ts` → wrote 108 characters, 1 line, 108 bytes, no trailing newline. Output matches the final entry byte for byte. PASS.
