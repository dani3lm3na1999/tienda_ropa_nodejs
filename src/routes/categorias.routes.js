const express = require('express');
const categoriasController = require('../controllers/categorias.controllers');
const router = express.Router();

router.get('/categorias', categoriasController.obtenerCategorias);
router.post('/categorias', categoriasController.crearCategoria);

module.exports = router;