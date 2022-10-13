const models = require('../models/salesModels');

const addSale = async (array) => {
  const [{ insertId }] = await models.saveDate();
  array.forEach((obj) => models.add(insertId, obj));
  return { id: insertId, itemsSold: array };
};

module.exports = {
  addSale,
};