const models = require('../models/productsModels');

const getAllProducts = () => models.getAll();

const getProductById = (id) => models.getById(id);

const addProduct = async ({ name }) => {
  const [{ insertId }] = await models.add(name);
  const result = await models.getById(insertId);
  return result;
};

const updateProduct = async (id, { name }) => {
  await models.update(id, name);
  const result = await models.getById(id);
  return result;
};

const removeProduct = (id) => models.remove(id);

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
};