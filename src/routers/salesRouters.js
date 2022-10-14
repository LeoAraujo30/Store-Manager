const express = require('express');
const controllers = require('../controllers/salesControllers');
const middlewares = require('../middlewares/salesMiddlewares');

const router = express.Router();
router.use(express.json());

router.post('/', middlewares.validateSale, middlewares.validateProductId, controllers.addSale);

router.get('/', controllers.getAllSales);

router.get('/:id', controllers.getSalesById);

module.exports = router;