const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');

const { PORT = 3000, DB_PATH = 'mongodb://localhost:27017/mestodb' } = process.env;
const app = express();

mongoose.connect(DB_PATH, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
