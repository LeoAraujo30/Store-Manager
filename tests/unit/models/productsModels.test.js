const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const models = require('../../../src/models/productsModels');
const mocks = require('../mocks');

const { expect } = chai;
const { getAll, getById, add, update } = models;
const { allProducts } = mocks;

describe('testando productsModels', function () {
  it('Listando todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await getAll();
    expect(result[0]).to.deep.equal(allProducts);
  });
  it('Buscando por um produto', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);
    const result = await getById(1);
    expect(result[0][0]).to.deep.equal(allProducts[0]);
  });
  it('Adicionando um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 999 }]);
    const result = await add('reator ARC');
    expect(result[0].insertId).to.be.equal(999);
  });
  it('Atualizando um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ changedRows: 1 }]);
    const result = await update(1, 'reator ARC');
    expect(result[0].changedRows).to.be.equal(1);
  });
  afterEach(sinon.restore);
});