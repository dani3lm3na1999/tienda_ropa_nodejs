const express = require('express');
const logosController = require('../controllers/logos.controllers');
const router = express.Router();

router.get('/logos', logosController.obtenerLogos);
router.post('/logos', logosController.crearLogo);
router.get('/logos/:tipo', logosController.obtenerLogoFiltrados);

module.exports = router;