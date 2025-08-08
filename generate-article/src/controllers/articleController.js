const runnable = require('../services/graphService');

const generateArticle = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const result = await runnable.invoke({ question });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate article' });
  }
};

module.exports = {
  generateArticle,
};
