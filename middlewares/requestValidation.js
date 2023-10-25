const { celebrate, Joi, Segments } = require('celebrate');

const regexUrl = /(\b(https?):\/\/(www\.)?(\w[a-zA-Z0-9-]{2,})+(\.{1})([a-z]{2,6})+)(\/[a-zA-Z0-9.\-_~:/?#[\]@!$&'()*+,;=]*)*/;

// User data validation

module.exports.validationUserId = celebrate({
  [Segments.PARAMS]: {
    userId: Joi.string().length(24).required(),
  },
});

module.exports.validationCreateUser = celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(regexUrl),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

module.exports.validationLogin = celebrate({
  [Segments.BODY]: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});

module.exports.validationUpdateInfo = celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  },
});

module.exports.validationUpdateAvatar = celebrate({
  [Segments.BODY]: {
    avatar: Joi.string().pattern(regexUrl).required(),
  },
});

// Cards data validation

module.exports.validationCreateCard = celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().pattern(regexUrl).required(),
  },
});

module.exports.validationCardId = celebrate({
  [Segments.PARAMS]: {
    cardId: Joi.string().length(24).hex().required(),
  },
});
