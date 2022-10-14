const services = require('../services/salesServices');

const addSale = async (req, res) => {
  try {
    const result = await services.addSale(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSales = async (_req, res) => {
  try {
    const result = await services.getAllSales();
    if (result.length === 0) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSalesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await services.getSalesById(Number(id));
    if (result.length === 0) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addSale,
  getAllSales,
  getSalesById,
};