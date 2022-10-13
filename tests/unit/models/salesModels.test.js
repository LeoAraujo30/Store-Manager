const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const models = require('../../../src/models/salesModels');
const mocks = require('../mocks');

const { expect } = chai;
const { saveDate, add } = models;
const { allSales } = mocks;


describe('testando salesModels', function () {
  it('Salvando a data da venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 999 }]);
    const result = await saveDate();
    expect(result[0].insertId).to.be.equal(999);
  });
  it('Registrando uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 999 }]);
    const result = await add(999, allSales[0]);
    expect(result[0].insertId).to.be.equal(999);
  });
  afterEach(sinon.restore);
});