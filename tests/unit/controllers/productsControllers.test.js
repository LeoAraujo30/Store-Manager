const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const controllers = require('../../../src/controllers/productsControllers');
const services = require('../../../src/services/productsServices');
const mocks = require('../mocks');

chai.use(sinonChai);

const { expect } = chai;
const { allProducts } = mocks;

describe('testando productsControllers', function () {
  it('Listando todos os produtos', async function () {
    sinon.stub(services, 'getAllProducts').resolves([allProducts]);
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });
  it('Não conseguindo listar todos os produtos', async function () {
    sinon.stub(services, 'getAllProducts').resolves();
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(500);
  });
  it('Buscando por um produto', async function () {
    sinon.stub(services, 'getProductById').resolves([[allProducts[0]]]);
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts[0]);
  });
  it('Não conseguindo buscar por um produto', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await controllers.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(500);
  });
  afterEach(sinon.restore);
});