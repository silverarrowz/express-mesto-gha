const userRouter = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateInfo,
  updateAvatar,
} = require('../controllers/users');

userRouter.get('/', getAllUsers);
userRouter.get('/:userId', getUserById);
userRouter.post('/', createUser);
userRouter.patch('/me', updateInfo);
userRouter.patch('/me/avatar', updateAvatar);

module.exports = userRouter;
