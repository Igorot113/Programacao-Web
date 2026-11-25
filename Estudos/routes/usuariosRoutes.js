// AULA 5 SEPARAÇÃO DE RESPONSABILIDADES
// Routes
const express = require('express');
const router = express.Router();

// esse 'require' -> importa o controller que criamos usuariosController;
const usuariosController = require('../controllers/usuariosController');

// 'router.get()' -> Registra uma rota GET e associa ela a uma função, que no caso seria o listarUsuarios;
// Colocar as rotas FIXAS antes das DINÂMICAS;
router.get('/', usuariosController.listarUsuarios);

router.get('/:id', usuariosController.buscarUsuarios);

module.exports = router;

