# Project Context

- **Owner:** Praveen Kumar Gandhi (git: pmeenakshisu)
- **Project:** personalWebsite — personal portfolio site
- **Stack:** Next.js 15 (TypeScript, Tailwind, App Router, static export) + FastAPI (Python 3.11, uvicorn/gunicorn)
- **Hosting:** Azure — App Service B1 (backend) + Static Web Apps Free (frontend), RG `PersonalWebsite`, Central US
- **Live URLs:**
  - Frontend: https://victorious-mud-064ce4410.7.azurestaticapps.net
  - Backend:  https://praveen-portfolio-api.azurewebsites.net
- **Budget:** ~$150/mo Azure credit. Current burn ~$13/mo.
- **Created:** 2026-04-16

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

### 2026-04-16 — Architecture walk-through (baseline snapshot)

- **Frontend**: Next.js **16.2.3**, React **19.2.4**, TypeScript, Tailwind **v4** (PostCSS plugin). App Router. `frontend/next.config.ts` sets `output: "export"` → static HTML in `frontend/out/`. Pages: `app/page.tsx` (home), `app/about`, `app/experience`, `app/projects`, `app/contact`. Shared chrome: `components/Navbar.tsx`, `components/Footer.tsx`, wired in `app/layout.tsx` (Geist font, gray-50 bg).
- **Client → API**: `projects/page.tsx` and `contact/page.tsx` are `"use client"` and read `process.env.NEXT_PUBLIC_API_URL`. `.env.production` points at `https://praveen-portfolio-api.azurewebsites.net`; `.env.local` at `http://localhost:8000`. `experience` and `about` pages are currently static (no fetch wired).
- **Backend**: FastAPI app at `backend/app/main.py`. Routers mounted under `/api/projects`, `/api/experience`, `/api/contact` from `backend/app/routes/*.py`. CORS allow-list hardcoded to `localhost:3000` + the SWA hostname `victorious-mud-064ce4410.7.azurestaticapps.net`. `requirements.txt`: fastapi 0.135.3, uvicorn 0.44.0, gunicorn 23.0.0, python-dotenv, pydantic[email].
- **Data layer reality**: No DB, no Blob, no SQLAlchemy. `projects.py` ships a **hardcoded Python list** of 7 projects. `experience.py` returns `[]`. `contact.py` `print()`s the message and returns success — no persistence, no email. README's "Azure SQL + Blob" diagram is aspirational, not implemented.
- **Azure (from `backend/.azure/config`)**: RG `PersonalWebsite`, location `centralus`, App Service Plan `portfolio-plan` **SKU B1**, Web App `praveen-portfolio-api`. Frontend is Azure Static Web Apps Free tier (hostname `victorious-mud-064ce4410.7.azurestaticapps.net`). Actual burn ~$13/mo — well under $150 budget.
- **CI/CD gap**: `.github/workflows/` only contains squad tooling (`squad-heartbeat`, `squad-issue-assign`, `squad-triage`, `sync-squad-labels`). **No `frontend.yml` / `backend.yml` deployment workflows exist** despite README claim. No Dockerfiles in repo either (README references them). Deploys are currently manual (`az webapp up` / SWA CLI or portal).
- **Server command**: Implicit — App Service B1 runs via Oryx auto-detect; no `Procfile` / `startup.sh` / gunicorn config committed. Likely relying on default `gunicorn app.main:app -k uvicorn.workers.UvicornWorker`.

### 2026-04-16 — Architecture documentation created

- Created `docs/architecture.md` as canonical system topology reference. Includes high-level Mermaid diagram (frontend/backend/routes/data sources), component stack details, Azure resource table with costs, request flow example, known gaps list, and AS-IS manual deployment flow diagram. Documentation is factual, not aspirational — documents what exists, not what README claims. Decision drop logged to `.squad/decisions/inbox/morpheus-architecture-doc.md` establishing update obligations on topology changes.

