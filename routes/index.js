const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');

router.use('/users', userRouter);
router.use('/cards', cardRouter);
router.use('/', (req, res, next) => {
  next(res.status(404).send({ message: 'Переданы некорректные данные' }));
});

module.exports = router;
