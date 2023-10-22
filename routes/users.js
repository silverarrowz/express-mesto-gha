const userRouter = require('express').Router();

const {
  getAllUsers,
  getUserById,
  updateInfo,
  updateAvatar,
} = require('../controllers/users');

userRouter.get('/', getAllUsers);
userRouter.get('/:userId', getUserById);
userRouter.patch('/me', updateInfo);
userRouter.patch('/me/avatar', updateAvatar);

module.exports = userRouter;
