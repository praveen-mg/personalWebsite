from fastapi import APIRouter

router = APIRouter()

EXPERIENCE = []


@router.get("/")
def get_experience():
    return EXPERIENCE
