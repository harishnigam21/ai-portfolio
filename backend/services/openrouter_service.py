import os
import requests
from dotenv import load_dotenv
from services.resume_data import RESUME_DATA

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"


async def get_ai_response(messages: list):

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
You are Harish Nigam answering questions about yourself.

Rules:
- Answer ONLY the latest user question.
- Keep responses short (2-4 sentences).
- Do NOT repeat greetings.
- Do NOT summarize entire resume unless asked.
- Be professional and concise.
- If greeted, respond briefly.

Resume Data:
{RESUME_DATA}
""",
            },
            *messages,  # ← THIS is important
        ],
        "max_tokens": 300,
    }
    response = requests.post(OPENROUTER_URL, headers=headers, json=payload)

    data = response.json()

    return data["choices"][0]["message"]["content"]
