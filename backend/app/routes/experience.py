from fastapi import APIRouter

router = APIRouter()

EXPERIENCE = [
    {
        "id": 1,
        "company": "Tech Company Inc.",
        "role": "Senior Software Engineer",
        "start": "2022-01",
        "end": None,
        "current": True,
        "location": "Seattle, WA",
        "description": "Leading development of cloud-native applications using Azure, Python, and React.",
        "highlights": [
            "Architected microservices reducing latency by 40%",
            "Led a team of 5 engineers across 3 time zones",
            "Migrated legacy monolith to Azure Container Apps",
        ],
    },
    {
        "id": 2,
        "company": "Startup Labs",
        "role": "Software Engineer",
        "start": "2019-06",
        "end": "2021-12",
        "current": False,
        "location": "San Francisco, CA",
        "description": "Built full-stack web applications for B2B SaaS products.",
        "highlights": [
            "Developed REST APIs serving 100k+ daily requests",
            "Reduced CI/CD pipeline time by 60% with GitHub Actions",
            "Introduced TypeScript across the frontend codebase",
        ],
    },
    {
        "id": 3,
        "company": "Digital Agency",
        "role": "Junior Developer",
        "start": "2017-08",
        "end": "2019-05",
        "current": False,
        "location": "Austin, TX",
        "description": "Developed client websites and internal tools.",
        "highlights": [
            "Delivered 20+ client projects on time",
            "Built CMS integrations with Contentful and Sanity",
        ],
    },
]


@router.get("/")
def get_experience():
    return EXPERIENCE
