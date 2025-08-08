# Generate Article API

This project is a Node.js Express-based API that generates articles on a given topic using LangGraph and Google's Gemini 1.5 Pro model.

## How it works

The API exposes a single endpoint, `/generate-article`, which accepts a POST request with a JSON body containing a "question" field. This "question" is the topic for the article you want to generate.

The backend uses a LangGraph graph to orchestrate the article generation process. The graph consists of four main steps:

1.  **Planner:** Creates a step-by-step plan to write the article.
2.  **Researcher:** Gathers information on the given topic.
3.  **Outline Creator:** Generates a structured outline for the article based on the research.
4.  **Writer:** Writes the final article based on the outline.

Each step is implemented as a node in the graph and utilizes a powerful language model (Google's Gemini 1.5 Pro) to perform its task.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Create a `.env` file in the `generate-article` directory and add your Gemini API key:
    ```
    GEMINI_API_KEY=your_gemini_api_key
    ```
3.  Start the server:
    ```bash
    node index.js
    ```

## Usage

Send a POST request to `http://localhost:3000/generate-article` with a JSON body like this:

```json
{
  "question": "What are the benefits of learning a new language?"
}
