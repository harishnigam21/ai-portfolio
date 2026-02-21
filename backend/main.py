import os
from dotenv import load_dotenv
from fastapi import FastAPI
from contextlib import asynccontextmanager
from database.mongo import client, db
from datetime import datetime
from routes.chat import router as chat_router
from routes.viewer import router as viewer_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

load_dotenv()
FrontendHost = os.getenv("FRONTEND_HOST")


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Connecting to MongoDB...")
    try:
        await client.admin.command("ping")
        print("MongoDB connected successfully!")
    except Exception as e:
        print("MongoDB connection failed:", e)

    yield

    print("Closing MongoDB connection...")
    client.close()


app = FastAPI(lifespan=lifespan)
app.add_middleware(TrustedHostMiddleware, allowed_hosts=["*"])

# Add CORS second
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FrontendHost],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Backend is running"}


app.include_router(chat_router, prefix="/api", tags=["Chat"])
app.include_router(viewer_router)
