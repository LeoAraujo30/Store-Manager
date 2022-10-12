const connection = require('./connection');

const getAll = async () => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return result;
};

const getById = async (id) => {
  const result = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const add = async (name) => {
  const result = await connection.execute(
    `INSERT INTO StoreManager.products (name)
    VALUES (?)`,
    [name],
    );
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
};