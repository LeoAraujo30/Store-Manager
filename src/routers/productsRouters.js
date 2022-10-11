const express = require('express');
const controllers = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', controllers.getAllProducts);

router.get('/:id', controllers.getProductById);

module.exports = router;