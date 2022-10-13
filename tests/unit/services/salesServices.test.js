const chai = require('chai');
const sinon = require('sinon');
const services = require('../../../src/services/salesServices');
const models = require('../../../src/models/salesModels');
const mocks = require('../mocks');

const { expect } = chai;
const { addSale } = services;
const { allSales } = mocks;

describe('testando salesServices', function () {
  it('Registrando uma nova venda', async function () {
    sinon.stub(models, 'saveDate').resolves([{ insertId: 999 }]);
    sinon.stub(models, 'add').resolves();
    const result = await addSale(allSales);
    expect(result).to.deep.equal({ id: 999, itemsSold: allSales });
  });
  afterEach(sinon.restore);
});