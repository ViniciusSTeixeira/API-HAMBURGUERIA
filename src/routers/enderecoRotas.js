const express = require('express');
const router = express.Router();

const EnderecoController = require('../controllers/EnderecoController.js');

router.get('/', EnderecoController.mostraTodos);

router.get('/:id', EnderecoController.mostrarPorId);

router.post('/criar', EnderecoController.criar);

router.put('/:id', EnderecoController.atualizar);

router.delete('/:id', EnderecoController.deletar);

module.exports = router;
