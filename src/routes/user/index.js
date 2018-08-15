import express from 'express';
const user = express();

user.get('/', (req, res) => {
  res.json({})
});

export default user;
