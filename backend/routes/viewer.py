from fastapi import APIRouter, Request
from database.mongo import db
from datetime import datetime

router = APIRouter()

@router.post("/new_user")
async def capture_viewer(request: Request):
    # Get real client IP
    ip = request.client.host

    # If behind proxy (production)
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        ip = forwarded.split(",")[0]

    viewer_data = {
        "ip": ip,
        "visited_at": datetime.utcnow()
    }

    await db.viewers.insert_one(viewer_data)

    return {"message": "Viewer captured"}