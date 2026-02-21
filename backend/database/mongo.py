import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

# Create Mongo client
client = AsyncIOMotorClient(MONGO_URL)

# Select database
db = client[DB_NAME]