import express from 'express';
import VacinaController from '../controllers/VacinaController.js';

const router = express.Router();

router.post('/', VacinaController.criar);
router.get('/', VacinaController.listar);
router.get('/:id', VacinaController.buscar);
router.put('/:id', VacinaController.atualizar);
router.delete('/:id', VacinaController.deletar);

export default router;
