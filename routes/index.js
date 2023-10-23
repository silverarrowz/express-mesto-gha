const router = require('express').Router();
const auth = require('../middlewares/auth');

const { login, createUser } = require('../controllers/users');
const { validationLogin, validationCreateUser } = require('../middlewares/requestValidation');
const userRouter = require('./users');
const cardRouter = require('./cards');

const NotFoundError = require('../utils/errors/NotFoundError');

router.post('/signup', validationCreateUser, createUser);
router.post('/signin', validationLogin, login);

router.use(auth);

router.use('/users', userRouter);
router.use('/cards', cardRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
