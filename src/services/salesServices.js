const models = require('../models/salesModels');

const addSale = async (array) => {
  const [{ insertId }] = await models.saveDate();
  array.forEach((obj) => models.add(insertId, obj));
  return { id: insertId, itemsSold: array };
};

const getAllSales = async () => {
  const [dateSales] = await models.getAllDates();
  const [sales] = await models.getAll();
  return sales.map((sale) => {
    const { sale_id: saleId, product_id: productId, quantity } = sale;
    const { date } = dateSales.find((dateSale) => dateSale.id === saleId);
    return { saleId, date, productId, quantity };
  });
};

const getSalesById = async (idSale) => {
  const [dateSales] = await models.getAllDates();
  const [sales] = await models.getById(idSale);
  return sales.map((sale) => {
    const { sale_id: saleId, product_id: productId, quantity } = sale;
    const { date } = dateSales.find((dateSale) => dateSale.id === saleId);
    return { date, productId, quantity };
  });
};

module.exports = {
  addSale,
  getAllSales,
  getSalesById,
};