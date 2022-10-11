const models = require('../models/productsModels');

const getAllProducts = () => models.getAll();
const getProductById = (id) => models.getById(id);

module.exports = {
  getAllProducts,
  getProductById,
};