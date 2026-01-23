import OpenAI from 'https://cdn.jsdelivr.net/npm/openai@4.28.0/+esm';
import { process } from './env.js';

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true
})

const upload = await openai.files.create({
  file: await fetch('motivationalBotData.jsonl'),
})

console.log(upload);