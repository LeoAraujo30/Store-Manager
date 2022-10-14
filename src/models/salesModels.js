const connection = require('./connection');

const saveDate = async () => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );
  return result;
};

const add = async (id, { productId, quantity }) => {
  const result = await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
      VALUES (?, ?, ?)`,
    [id, productId, quantity],
  );
  return result;
};

const getAllDates = async () => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.sales ORDER BY id ASC',
  );
  return result;
};

const getAll = async () => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.sales_products ORDER BY sale_id ASC, product_id ASC',
  );
  return result;
};

const getById = async (id) => {
  const result = await connection.execute(
    `SELECT * FROM StoreManager.sales_products 
      WHERE sale_id = ? ORDER BY sale_id ASC, product_id ASC`,
    [id],
  );
  return result;
};

module.exports = {
  saveDate,
  add,
  getAllDates,
  getAll,
  getById,
};