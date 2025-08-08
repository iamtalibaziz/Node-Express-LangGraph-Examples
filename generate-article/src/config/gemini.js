const { ChatGoogleGenerativeAI } = require('@langchain/google-genai');

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-1.5-pro',
  apiKey: process.env.GEMINI_API_KEY,
});

module.exports = model;
