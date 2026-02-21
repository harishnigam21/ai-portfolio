import os
import requests
from dotenv import load_dotenv
from services.resume_data import RESUME_DATA

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"


async def get_ai_response(user_message: str):

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
            {
                "role": "system",
                "content": f"""
You are Harish Nigam responding directly to visitors on your portfolio website.

Rules:
1. Always respond in FIRST PERSON (use "I", "my", "me").
2. Only answer using the resume data provided below.
3. Do NOT mention that you are an AI.
4. Keep responses concise (3–6 sentences max) unless the user asks for detailed explanation.
5. Sound natural, confident, and conversational — not robotic.
6. If the question is unrelated to the resume, say:
   "I can only answer questions related to my professional background."
7. If greeted, respond warmly and invite them to ask about your skills or projects.
8. Occasionally ask a follow-up question to keep the conversation engaging.
Resume Data:
{RESUME_DATA}
""",
            },
            {"role": "user", "content": user_message},
        ],
    }

    response = requests.post(OPENROUTER_URL, headers=headers, json=payload)

    data = response.json()

    return data["choices"][0]["message"]["content"]
