require('dotenv').config();

const { PORT } = require('./config/constants');
const express = require('express');
const userRouter = require('./user/router');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log('Running application in port: ', PORT);
});
