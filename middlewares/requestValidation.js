const { celebrate, Joi, Segments } = require('celebrate');

const regexUrl = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-_.~:/?#[\]@!$&'()*+,;=]+)+#?$/;

// User data validation

module.exports.validationUserId = celebrate({
  [Segments.PARAMS]: {
    userId: Joi.string().hex().length(24).required(),
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
    avatar: Joi.string().required().pattern(regexUrl),
  },
});

// Cards data validation

module.exports.validationCreateCard = celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().required(),
  },
});

module.exports.validationCardId = celebrate({
  [Segments.PARAMS]: {
    cardId: Joi.string().length(24).hex().required(),
  },
});
