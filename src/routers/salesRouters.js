const express = require('express');
const controllers = require('../controllers/salesControllers');
const middlewares = require('../middlewares/salesMiddlewares');

const router = express.Router();
router.use(express.json());

router.post('/', middlewares.validateSale, middlewares.validateProductId, controllers.addSale);

// router.get('/:id', controllers.getProductById);

// router.post('/', middlewares.validateProduct, controllers.addProduct);

module.exports = router;