const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const { PORT = 3000, DB_PATH = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();

mongoose.connect(DB_PATH, {
  useNewUrlParser: true,
})
  .then(() => console.log('Server is working'))
  .catch(() => console.log('No connection to server'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
