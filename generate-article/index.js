require('dotenv').config();
const express = require('express');
const articleRoutes = require('./src/routes/articleRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(articleRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
