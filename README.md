# Node-Express-LangGraph-Examples

This repository contains examples of Node.js-based APIs built with Express and LangGraph.

## Projects

### 1. Generate Article

This project is a Node.js-based API that generates articles on a given topic.

**How it works**

The API exposes a single endpoint, `/generate-article`, which accepts a POST request with a JSON body containing a "question" field. This "question" is the topic for the article you want to generate.

The backend uses a LangGraph graph to orchestrate the article generation process. The graph consists of four main steps:

1.  **Planner:** Creates a step-by-step plan to write the article.
2.  **Researcher:** Gathers information on the given topic.
3.  **Outline Creator:** Generates a structured outline for the article based on the research.
4.  **Writer:** Writes the final article based on the outline.

Each step is implemented as a node in the graph and utilizes a powerful language model (Google's Gemini 1.5 Pro) to perform its task.

**How to run**

1.  Install the dependencies:
    ```bash
    npm install
    ```
2.  Create a `.env` file and add your Gemini API key:
    ```
    GEMINI_API_KEY="YOUR_API_KEY"
    ```
3.  Run the Express server:
    ```bash
    npm run start:generate-article
    ```
4.  Send a POST request to `http://127.0.0.1:3000/generate-article` with a JSON body like this:
    ```json
    {
      "question": "What are the benefits of using Express?"
    }
