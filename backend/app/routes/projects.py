from fastapi import APIRouter

router = APIRouter()

PROJECTS = [
    {
        "id": 1,
        "title": "Distributed Machine Learning Training on Kubernetes",
        "description": "Modified TensorFlow model to support distributed training on Kubernetes. Created Docker containers for multi-GPU training and deployed onto Kubernetes to improve training speed.",
        "tech": ["TensorFlow", "Kubernetes", "Docker", "Python", "Machine Learning"],
        "github": "",
        "demo": "",
        "image": "",
    },
    {
        "id": 2,
        "title": "Wrangle OpenStreetMap Data",
        "description": "Extracted, cleaned and analysed Singapore OpenStreetMap data (218MB). Exported into MongoDB and queried insights — identifying the top contributor responsible for 26.97% of data.",
        "tech": ["Python", "MongoDB", "Data Wrangling", "OpenStreetMap"],
        "github": "https://github.com/praveen-mg/Singapore-OpenStreet-MongoDB",
        "demo": "",
        "image": "",
    },
    {
        "id": 3,
        "title": "Identifying Fraud in Enron Dataset",
        "description": "Analysed the Enron dataset with feature selection to achieve 84% accuracy, then applied and fine-tuned ML algorithms to identify fraud with 88% accuracy.",
        "tech": ["Python", "Machine Learning", "scikit-learn", "Feature Engineering"],
        "github": "https://github.com/praveen-mg/enron_machine_learning",
        "demo": "",
        "image": "",
    },
    {
        "id": 4,
        "title": "Author Prediction from Corpus of Data",
        "description": "Identified features relevant for ML classification by analysing a given corpus of data. Achieved 94% accuracy on hidden data using feature engineering.",
        "tech": ["Python", "NLP", "Machine Learning", "Feature Engineering"],
        "github": "",
        "demo": "",
        "image": "",
    },
    {
        "id": 5,
        "title": "Investigate a Titanic Dataset",
        "description": "Analysed the Titanic dataset examining features such as age, gender, and port of embarkation on survival rates using Jupyter and Python, without statistical inference.",
        "tech": ["Python", "Jupyter", "Pandas", "Data Analysis"],
        "github": "https://github.com/praveen-mg/Titanic-Data-Analysis",
        "demo": "",
        "image": "",
    },
    {
        "id": 6,
        "title": "Reliable Broadcast with BATS Code",
        "description": "Developed a network coding application for reliable two-phase broadcasting. Reduced transmission overhead by ~28% for wireless erasure channels with 50% packet loss.",
        "tech": ["C++", "Network Coding", "BATS Code", "Signal Processing"],
        "github": "",
        "demo": "",
        "image": "",
    },
    {
        "id": 7,
        "title": "GnuRadio + USRP2 Single-Carrier ZCZ-CDMA System",
        "description": "Implemented new signal processing blocks for CDMA systems and demonstrated the project in real time using USRP boards. Ported the system to the latest Software Defined Radio version.",
        "tech": ["GnuRadio", "USRP", "C++", "CDMA", "Signal Processing"],
        "github": "",
        "demo": "",
        "image": "",
    },
]


@router.get("/")
def get_projects():
    return PROJECTS

