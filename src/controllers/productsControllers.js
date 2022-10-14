const services = require('../services/productsServices');

const getAllProducts = async (_req, res) => {
  try {
    const [result] = await services.getAllProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await services.getProductById(Number(id));
    if (result.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const [result] = await services.addProduct(req.body);
    res.status(201).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await services.updateProduct(Number(id), req.body);
    if (result.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await services.removeProduct(Number(id));
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
};