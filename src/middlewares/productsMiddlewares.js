const joi = require('joi');

const product = joi.object({ name: joi.string().required() });

const validateProduct = async (req, res, next) => {
  const { error } = product.validate(req.body);
  if (error) return res.status(400).json({ message: '"name" is required' });
  if (req.body.name.length < 5) {
    res.status(422).json(
      { message: '"name" length must be at least 5 characters long' },
    );
  } else {
    next();
  }
};

module.exports = {
  validateProduct,
};