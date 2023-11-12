const express = require('express');
const productoController = require('../controllers/productos.controllers');
const router = express.Router();

router.get('/productos', productoController.obtenerProductos);
router.post('/productos', productoController.crearProducto);

module.exports = router;