const services = require('../services/salesServices');

const addSale = async (req, res) => {
  try {
    const result = await services.addSale(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addSale,
};