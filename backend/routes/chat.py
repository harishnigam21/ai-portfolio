from fastapi import APIRouter
from database.mongo import db
from datetime import datetime
from models.chat_model import ChatRequest
from services.openrouter_service import get_ai_response

router = APIRouter()


@router.post("/chat")
async def chat(request: ChatRequest):

    ai_response = await get_ai_response([msg.dict() for msg in request.messages])

    document = {
        "messages": [msg.dict() for msg in request.messages],
        "ai_response": ai_response,
        "created_at": datetime.utcnow(),
    }

    result = await db["chat_logs"].insert_one(document)

    return {"reply": ai_response, "chat_id": str(result.inserted_id)}
