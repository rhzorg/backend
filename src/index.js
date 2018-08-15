/**
 * Backend entry file
 */
import express from 'express';
import UserRoute from './routes/user';
const app = express();

app.use('/user', UserRoute);

app.get('/', (req, res) => {
  res.json({
    test: true,
    test1: false
  })
});

app.listen(__config.APP_PORT, 'localhost', () => {
  console.log(`Backend (appId:${__config.APP_ID}) running on http://localhost:${__config.APP_PORT}`);
});
