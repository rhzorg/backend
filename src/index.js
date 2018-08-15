/**
 * Backend entry file
 */
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.json({
    test: true
  })
});

app.listen(3000, 'localhost', () => {
  console.log(`Backend running on http://localhost:3000`);
});
