const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const controllers = require('../../../src/controllers/salesControllers');
const services = require('../../../src/services/salesServices');
const mocks = require('../mocks');

chai.use(sinonChai);

const { expect } = chai;
const { allSales } = mocks;

describe('testando salesControllers', function () {
  it('Registrando uma nova venda', async function () {
    sinon.stub(services, 'addSale').resolves({ id: 999, itemsSold: allSales });
    const req = { body: allSales };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.addSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 999, itemsSold: allSales });
  });
  it('Não conseguindo registrar uma nova venda', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.addSale(req, res);

    expect(res.status).to.have.been.calledWith(500);
  });
  afterEach(sinon.restore);
});