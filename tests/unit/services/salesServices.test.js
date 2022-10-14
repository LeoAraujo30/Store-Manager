const chai = require('chai');
const sinon = require('sinon');
const services = require('../../../src/services/salesServices');
const models = require('../../../src/models/salesModels');
const mocks = require('../mocks');

const { expect } = chai;
const { addSale, getAllSales, getSalesById } = services;
const { addSales, datas, allSalesDb, allSales, oneSaleDb, oneSale } = mocks;

describe('testando salesServices', function () {
  it('Registrando uma nova venda', async function () {
    sinon.stub(models, 'saveDate').resolves([{ insertId: 999 }]);
    sinon.stub(models, 'add').resolves();
    const result = await addSale(addSales);
    expect(result).to.deep.equal({ id: 999, itemsSold: addSales });
  });
  it('Listando todas as vendas', async function () {
    sinon.stub(models, 'getAllDates').resolves([datas]);
    sinon.stub(models, 'getAll').resolves([allSalesDb]);
    const result = await getAllSales();
    expect(result).to.deep.equal(allSales);
  });
  it('Buscando por uma venda', async function () {
    sinon.stub(models, 'getAllDates').resolves([datas]);
    sinon.stub(models, 'getById').resolves([oneSaleDb]);
    const result = await getSalesById(1);
    expect(result).to.deep.equal(oneSale);
  });
  afterEach(sinon.restore);
});