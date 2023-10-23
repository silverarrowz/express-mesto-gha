const cardRouter = require('express').Router();

const {
  getAllCards,
  createCard,
  deleteCard,
  addLike,
  removeLike,
} = require('../controllers/cards');

const { validationCreateCard, validationCardId } = require('../middlewares/requestValidation');

cardRouter.get('/', getAllCards);
cardRouter.post('/', validationCreateCard, createCard);
cardRouter.delete('/:cardId', validationCardId, deleteCard);
cardRouter.put('/:cardId/likes', validationCardId, addLike);
cardRouter.delete('/:cardId/likes', validationCardId, removeLike);

module.exports = cardRouter;
