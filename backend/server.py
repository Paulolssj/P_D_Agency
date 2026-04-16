from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
dotenv_path = ROOT_DIR / '.env'
if dotenv_path.exists():
    load_dotenv(dotenv_path)

mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'pd_agency')

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    package_interest: Optional[str] = ''
    message: str
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    package_interest: Optional[str] = ''
    message: str


@api_router.get("/")
async def root():
    return {"message": "P&D Agency API"}


@api_router.post("/contact")
async def submit_contact(form: ContactSubmissionCreate):
    submission = ContactSubmission(**form.model_dump())
    doc = submission.model_dump()
    await db.contact_submissions.insert_one(doc)
    return {"success": True, "message": "Mensagem enviada com sucesso!"}


@api_router.get("/contact")
async def get_contacts():
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    return submissions


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
