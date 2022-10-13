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

module.exports = {
  saveDate,
  add,
};