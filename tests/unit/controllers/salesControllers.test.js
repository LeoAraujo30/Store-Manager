const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const controllers = require('../../../src/controllers/salesControllers');
const services = require('../../../src/services/salesServices');
const mocks = require('../mocks');

chai.use(sinonChai);

const { expect } = chai;
const { addSales, allSales, oneSale } = mocks;

describe('testando salesControllers', function () {
  it('Registrando uma nova venda', async function () {
    sinon.stub(services, 'addSale').resolves({ id: 999, itemsSold: addSales });
    const req = { body: addSales };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.addSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 999, itemsSold: addSales });
  });
  it('Não conseguindo registrar uma nova venda', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.addSale(req, res);

    expect(res.status).to.have.been.calledWith(500);
  });
  it('Listando todas as vendas', async function () {
    sinon.stub(services, 'getAllSales').resolves(allSales);
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });
  it('Não conseguindo listar todas as vendas', async function () {
    sinon.stub(services, 'getAllSales').resolves();
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(500);
  });
  it('Buscando por uma venda', async function () {
    sinon.stub(services, 'getSalesById').resolves(oneSale);
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getSalesById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(oneSale);
  });
  it('Não conseguindo buscar por uma venda', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getSalesById(req, res);

    expect(res.status).to.have.been.calledWith(500);
  });
  afterEach(sinon.restore);
});