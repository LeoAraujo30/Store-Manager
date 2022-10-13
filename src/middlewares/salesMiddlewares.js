const joi = require('joi');
const services = require('../services/productsServices');

const productId = joi.number().required();
const quantity = joi.number().required();

const validateSale = (req, res, next) => {
  req.body.forEach((obj, index) => {
    const { error: error1 } = productId.validate(obj.productId);
    if (error1) return res.status(400).json({ message: '"productId" is required' });

    const { error: error2 } = quantity.validate(obj.quantity);
    if (error2) return res.status(400).json({ message: '"quantity" is required' });

    if (obj.quantity <= 0) {
      return res.status(422).json(
        { message: '"quantity" must be greater than or equal to 1' },
      );
    }

    if (index === req.body.length - 1) return next();
  });
};

const validateProductId = async (req, res, next) => {
  const [result] = await services.getAllProducts();
  const bools = req.body.map((obj) => {
    const { productId: id } = obj;
    return result.every((product) => product.id !== id);
  });
  if (bools.some((bool) => bool === true)) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    next();
  }
};

module.exports = {
  validateSale,
  validateProductId,
};