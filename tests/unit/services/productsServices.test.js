const chai = require('chai');
const sinon = require('sinon');
const services = require('../../../src/services/productsServices');
const models = require('../../../src/models/productsModels');
const mocks = require('../mocks');

const { expect } = chai;
const { getAllProducts, getProductById, addProduct } = services;
const { allProducts, oneProduct } = mocks;

describe('testando productsServices', function () {
  it('Listando todos os produtos', async function () {
    sinon.stub(models, 'getAll').resolves([allProducts]);
    const result = await getAllProducts();
    expect(result[0]).to.deep.equal(allProducts);
  });
  it('Buscando por um produto', async function () {
    sinon.stub(models, 'getById').resolves([[allProducts[0]]]);
    const result = await getProductById(1);
    expect(result[0][0]).to.deep.equal(allProducts[0]);
  });
  it('Adicionando um produto', async function () {
    sinon.stub(models, 'add').resolves([{ insertId: 999 }]);
    sinon.stub(models, 'getById').resolves([oneProduct]);
    const result = await addProduct('reator ARC');
    expect(result[0]).to.deep.equal(oneProduct);
  });
  afterEach(sinon.restore);
});