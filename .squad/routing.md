# Work Routing

How to decide who handles what.

## Routing Table

| Work Type | Route To | Examples |
|-----------|----------|----------|
| Frontend (Next.js, React, Tailwind, static export) | Trinity | `frontend/app/*`, components, `next.config.ts`, env vars |
| Backend (FastAPI, Python, APIs) | Tank | `backend/app/*`, routes, `requirements.txt`, CORS |
| Azure infra, deploys, CI/CD | Link | `az` / `swa` commands, GitHub Actions, app settings, startup commands |
| Testing, verification, regression | Switch | API smoke checks, build verification, CORS regression, Playwright/pytest |
| Architecture, scope, code review | Morpheus | Cross-cutting decisions, review PRs, prioritize features |
| Session logging | Scribe | Automatic — never needs routing |
| Backlog monitoring | Ralph | GitHub issue queue, PR follow-ups, idle-watch |

## Issue Routing

| Label | Action | Who |
|-------|--------|-----|
| `squad` | Triage: analyze issue, assign `squad:{member}` label | Morpheus (Lead) |
| `squad:morpheus` | Architecture / review / scope issues | Morpheus |
| `squad:trinity` | Frontend issues | Trinity |
| `squad:tank` | Backend issues | Tank |
| `squad:link` | DevOps / Azure / CI issues | Link |
| `squad:switch` | Testing / bug reports | Switch |

## Rules

1. **Eager by default** — spawn all agents who could usefully start work in parallel.
2. **Scribe always runs** after substantial work, always `mode: "background"`.
3. **Quick facts → coordinator answers directly.** Don't spawn an agent for "what port does the API use?"
4. **When two agents could handle it**, pick the one whose domain is primary.
5. **"Team, …" → fan-out.** Spawn all relevant agents in parallel.
6. **Anticipate downstream work** — e.g., spawn Switch to write test cases while Tank builds the endpoint.
7. **Azure changes go through Link** — no one else touches `az` / `swa` CLI.
8. **Budget check** — any change that could move Azure cost above ~$20/mo must be flagged to Morpheus before Link executes.
