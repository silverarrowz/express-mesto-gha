const userRouter = require('express').Router();

const {
  getAllUsers,
  getUserById,
  getCurrentUser,
  updateInfo,
  updateAvatar,
} = require('../controllers/users');

const { validationUserId, validationUpdateInfo, validationUpdateAvatar } = require('../middlewares/requestValidation');

userRouter.get('/', getAllUsers);
userRouter.get('/me', getCurrentUser);
userRouter.patch('/me', validationUpdateInfo, updateInfo);
userRouter.patch('/me/avatar', validationUpdateAvatar, updateAvatar);
userRouter.get('/:userId', validationUserId, getUserById);

module.exports = userRouter;
