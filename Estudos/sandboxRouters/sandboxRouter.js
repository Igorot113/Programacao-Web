const express = require('express');
const router = express.Router();

const controller = require('../sandboxControllers/sandboxController');

router.get('/listar', controller.listarProduto);
router.get('/total', controller.totalProdutos);
router.get('/achar/:id', controller.acharPorID);
router.get('/filtrar/:id', controller.filtrarPorID);

module.exports = router;