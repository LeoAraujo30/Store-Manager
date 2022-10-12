const express = require('express');
const controllers = require('../controllers/productsControllers');
const middlewares = require('../middlewares/productsMiddlewares');

const router = express.Router();
router.use(express.json());

router.get('/', controllers.getAllProducts);

router.get('/:id', controllers.getProductById);

router.post('/', middlewares.validateProduct, controllers.addProduct);

module.exports = router;