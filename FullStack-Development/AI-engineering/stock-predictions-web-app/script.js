import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
})

const messages = [
  {
    role: 'system',
    content: 'You are a master educator who can explain any topic to any age group.'
  },
  {
    role: 'user',
    content: 'Explain Quantum Computing to a 10-year-old. Use exactly two sentences and a simple analogy.'
  }
]

const response = await openai.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: messages
})

console.log(response.choices[0].message.content)