const { StateGraph } = require('@langchain/langgraph');
const model = require('../config/gemini');

const planNode = async (state) => {
  const { question } = state;
  const { content } = await model.invoke(
    `Create a step-by-step plan to write an article on the topic: "${question}"`
  );
  return { ...state, plan: content };
};

const researchNode = async (state) => {
  const { question } = state;
  const { content } = await model.invoke(
    `Gather information on the topic: "${question}"`
  );
  return { ...state, research: content };
};

const outlineNode = async (state) => {
  const { research } = state;
  const { content } = await model.invoke(
    `Create a structured outline for the article based on the following research: ${research}`
  );
  return { ...state, outline: content };
};

const writeNode = async (state) => {
  const { outline } = state;
  const { content } = await model.invoke(
    `Write the final article based on the following outline: ${outline}`
  );
  return { ...state, article: content };
};

const graph = new StateGraph({
  channels: {
    question: {
      value: (x, y) => y,
      default: () => '',
    },
    plan: {
      value: (x, y) => y,
      default: () => '',
    },
    research: {
      value: (x, y) => y,
      default: () => '',
    },
    outline: {
      value: (x, y) => y,
      default: () => '',
    },
    article: {
      value: (x, y) => y,
      default: () => '',
    },
  },
});

graph.addNode('planner', planNode);
graph.addNode('researcher', researchNode);
graph.addNode('outline_creator', outlineNode);
graph.addNode('writer', writeNode);

graph.addEdge('planner', 'researcher');
graph.addEdge('researcher', 'outline_creator');
graph.addEdge('outline_creator', 'writer');
graph.setEntryPoint('planner');
graph.setFinishPoint('writer');

const runnable = graph.compile();

module.exports = runnable;
