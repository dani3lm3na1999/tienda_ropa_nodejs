const express = require('express');
const productoController = require('../controllers/productos.controllers');
const router = express.Router();

router.get('/productos', productoController.obtenerProductos);
router.post('/productos', productoController.fileUpload, productoController.crearProducto);
router.get('/productos/categoria/:id', productoController.obtenerProductosByCategoria);

module.exports = router;