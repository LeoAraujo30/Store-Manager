const models = require('../models/productsModels');

const getAllProducts = () => models.getAll();

const getProductById = (id) => models.getById(id);

const addProduct = async ({ name }) => {
  const [{ insertId }] = await models.add(name);
  const result = await models.getById(insertId);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};