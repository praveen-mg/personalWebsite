from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import projects, experience, contact

app = FastAPI(title="Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://victorious-mud-064ce4410.7.azurestaticapps.net",
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router, prefix="/api/projects", tags=["Projects"])
app.include_router(experience.router, prefix="/api/experience", tags=["Experience"])
app.include_router(contact.router, prefix="/api/contact", tags=["Contact"])


@app.get("/")
def root():
    return {"status": "ok", "message": "Portfolio API is running"}
