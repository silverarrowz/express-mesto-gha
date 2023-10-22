const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const { PORT = 3000, DB_PATH = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();

// app.use((req, res, next) => {
//   req.user = {
//     _id: '652e9bd88b43cef2098eaefe',
//   };
//   next();
// });

mongoose.connect(DB_PATH, {
  useNewUrlParser: true,
})
  .then(() => console.log('Server is working'))
  .catch(() => console.log('No connection to server'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
