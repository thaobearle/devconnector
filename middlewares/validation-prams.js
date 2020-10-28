const { validationResult } = require('express-validator');

const validationParams = (req, res, next) => {
  const errros = validationResult(req);
  if (!errros.isEmpty()) {
    return res.status(400).json({ errros: errros.array() });
  }
  next();
};

module.exports = validationParams;
