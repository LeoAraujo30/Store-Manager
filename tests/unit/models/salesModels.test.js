const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const models = require('../../../src/models/salesModels');
const mocks = require('../mocks');

const { expect } = chai;
const { saveDate, add, getAllDates, getAll, getById } = models;
const { addSales, datas, allSalesDb, oneSaleDb } = mocks;


describe('testando salesModels', function () {
  it('Salvando a data da venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 999 }]);
    const result = await saveDate();
    expect(result[0].insertId).to.be.equal(999);
  });
  it('Registrando uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 999 }]);
    const result = await add(999, addSales[0]);
    expect(result[0].insertId).to.be.equal(999);
  });
  it('Listando todas as datas', async function () {
    sinon.stub(connection, 'execute').resolves([datas]);
    const result = await getAllDates();
    expect(result[0]).to.deep.equal(datas);
  });
  it('Listando todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesDb]);
    const result = await getAll();
    expect(result[0]).to.deep.equal(allSalesDb);
  });
  it('Buscando por uma venda', async function () {
    sinon.stub(connection, 'execute').resolves([oneSaleDb]);
    const result = await getById(1);
    expect(result[0]).to.deep.equal(oneSaleDb);
  });
  afterEach(sinon.restore);
});
