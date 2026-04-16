# Personal Portfolio Website

A professional portfolio website showcasing Praveen Kumar Gandhi's background, technical skills, project work, and professional experience. Built with modern web technologies and deployed on Azure.

## 🌐 Live URLs

- **Frontend:** https://victorious-mud-064ce4410.7.azurestaticapps.net
- **Backend API:** https://praveen-portfolio-api.azurewebsites.net

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.2.3 (React 19.2.4)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (PostCSS plugin)
- **Architecture:** App Router, static export (`output: "export"`)
- **Hosting:** Azure Static Web Apps (Free tier)

### Backend
- **Framework:** FastAPI 0.135.3
- **Server:** Uvicorn 0.44.0 + Gunicorn 23.0.0
- **Language:** Python 3.11
- **Hosting:** Azure App Service B1 (Central US)
- **Resource Group:** PersonalWebsite
- **App Name:** praveen-portfolio-api

### Data
- **Current State:** Hardcoded Python lists (no database)
- **Projects:** 7 portfolio items defined in `backend/app/routes/projects.py`
- **Experience:** Empty list (placeholder route)
- **Contact:** Logs to stdout, does not persist or deliver messages

## 📄 Pages

- **Home** (`/`) — Hero section with introduction and call-to-action
- **About** (`/about`) — Biography, background, and core skills
- **Experience** (`/experience`) — Professional work history (currently empty)
- **Projects** (`/projects`) — Portfolio showcase fetched from `/api/projects/`
- **Contact** (`/contact`) — Contact form (non-functional — messages not delivered)

## 📁 Project Structure

```
personalWebsite/
├── frontend/              # Next.js static site
│   ├── app/               # App Router pages
│   │   ├── page.tsx       # Home
│   │   ├── about/         # About page
│   │   ├── experience/    # Experience page
│   │   ├── projects/      # Projects page (fetches from API)
│   │   ├── contact/       # Contact form (fetches API, non-functional)
│   │   └── layout.tsx     # Shared layout (Navbar, Footer, Geist font)
│   ├── components/        # Shared React components (Navbar, Footer)
│   ├── public/            # Static assets
│   ├── next.config.ts     # Next.js config (static export enabled)
│   └── package.json
├── backend/               # FastAPI application
│   ├── app/
│   │   ├── main.py        # App entry, CORS config, route mounting
│   │   └── routes/
│   │       ├── projects.py    # Returns hardcoded project list
│   │       ├── experience.py  # Returns empty list
│   │       └── contact.py     # Accepts form, prints to stdout
│   ├── .azure/            # Azure deployment config
│   └── requirements.txt
├── docs/                  # Project documentation
│   └── architecture.md    # System architecture diagrams and details
├── .squad/                # AI agent configuration and history
│   ├── agents/
│   ├── decisions.md
│   └── decisions/inbox/
└── .github/
    └── workflows/         # GitHub Actions (squad tooling only, no deploy)
```

## 🚀 Local Development

### Prerequisites
- Node.js 20+
- Python 3.11+

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:3000. Uses `.env.local` for `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:8000`).

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Runs on http://localhost:8000. API routes available at `/api/projects/`, `/api/experience/`, `/api/contact/`.

### CORS Configuration

The backend CORS allow-list is hardcoded in `backend/app/main.py`:
- `http://localhost:3000` (local dev)
- `https://victorious-mud-064ce4410.7.azurestaticapps.net` (production)

Update this list if deploying to a different frontend URL.

## 📦 Deployment

**Current State:** Manual deployments only. No CI/CD pipelines configured.

### Frontend
- **Method:** Azure Static Web Apps CLI or Azure Portal
- **Build:** `npm run build` generates static HTML in `frontend/out/`
- **Target:** Azure Static Web Apps (Free tier)

### Backend
- **Method:** `az webapp up` or Azure Portal deployment
- **Runtime:** Detected automatically via Oryx build system (Python 3.11)
- **Server:** Gunicorn + Uvicorn workers (auto-configured by App Service)
- **Target:** App Service B1 plan, `PersonalWebsite` resource group, Central US region

## 💰 Monthly Cost

| Service | Tier | Cost |
|---|---|---|
| Azure Static Web Apps | Free | $0/mo |
| Azure App Service | B1 (1 core, 1.75GB RAM) | ~$13/mo |
| **Total** | | **~$13/mo** |

Budget headroom: $150/mo Azure credit available.

## 🏗️ Architecture

See [`docs/architecture.md`](docs/architecture.md) for detailed system topology, component diagrams, request flow examples, and Azure resource specifications.

## ⚠️ Known Limitations

1. **No CI/CD:** Deployments are manual. GitHub Actions workflows for frontend/backend deployment do not exist yet.
2. **Contact Form Non-Functional:** The `/api/contact/` endpoint accepts form submissions but only prints to stdout. Messages are not persisted, emailed, or delivered anywhere.
3. **No Database:** All data (projects, experience) is hardcoded in Python. No Azure SQL, PostgreSQL, or persistent storage.
4. **Experience Page Empty:** `/api/experience/` returns an empty list. Work history not yet populated.
5. **Hardcoded CORS:** Frontend URLs are hardcoded in `backend/app/main.py` CORS config.

## 🗺️ Roadmap

- [ ] Set up CI/CD pipelines (GitHub Actions for automated deployments)
- [ ] Implement real contact form delivery (email integration or database persistence)
- [ ] Populate Experience page with work history
- [ ] Add observability (Application Insights, structured logging)
- [ ] Migrate to database for dynamic content (if needed at scale)

