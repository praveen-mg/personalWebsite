# Personal Portfolio Website

A professional portfolio website showcasing experience, projects, and contact information.

## 🏗️ Architecture

```
Browser → Next.js (Azure Static Web Apps)
                ↓ API calls
          Python FastAPI (Azure App Service B1)
                ↓
          Azure SQL Database (projects, experience, contact_messages)
                ↓
          Azure Blob Storage (resume PDF, project images)
```

## 🛠️ Tech Stack

| Layer | Technology | Hosting |
|---|---|---|
| Frontend | Next.js (TypeScript) + Tailwind CSS | Azure Static Web Apps |
| Backend | Python FastAPI | Azure App Service B1 |
| Database | Azure SQL Basic | Azure |
| Storage | Azure Blob Storage | Azure |
| CI/CD | GitHub Actions | GitHub |

## 📄 Pages

- **Home** — Hero section with introduction
- **About** — Bio and skills
- **Experience** — Work history
- **Projects** — Portfolio items with images
- **Contact** — Contact form

## 💰 Estimated Monthly Cost

| Service | Cost |
|---|---|
| Azure Static Web Apps (Standard) | ~$9/mo |
| Azure App Service B1 (Backend API) | ~$13/mo |
| Azure SQL Basic | ~$5/mo |
| Azure Blob Storage | ~$2/mo |
| **Total** | **~$29/mo** |

## 📁 Project Structure

```
personalWebsite/
├── frontend/          # Next.js app
│   ├── app/
│   │   ├── page.tsx          # Home
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── contact/
│   ├── components/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── backend/           # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   │   ├── projects.py
│   │   │   ├── experience.py
│   │   │   └── contact.py
│   │   ├── models/
│   │   └── database.py
│   ├── Dockerfile
│   └── requirements.txt
├── infra/             # Azure infrastructure scripts
│   └── setup.sh
└── .github/
    └── workflows/
        ├── frontend.yml
        └── backend.yml
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Python 3.11+
- Docker
- Azure CLI

### Local Development

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Docker

```bash
# Frontend
docker build -t portfolio-frontend ./frontend
docker run -p 3000:3000 portfolio-frontend

# Backend
docker build -t portfolio-backend ./backend
docker run -p 8000:8000 portfolio-backend
```

## 🔧 Environment Variables

### Frontend (`.env.local`)
```
NEXT_PUBLIC_API_URL=https://<your-api>.azurewebsites.net
```

### Backend (`.env`)
```
DATABASE_URL=<azure-sql-connection-string>
BLOB_CONNECTION_STRING=<azure-blob-connection-string>
BLOB_CONTAINER_NAME=assets
```

## 📦 Deployment

Deployments are automated via GitHub Actions on push to `main`:
- Frontend → Azure Static Web Apps
- Backend → Azure App Service B1

