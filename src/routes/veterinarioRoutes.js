import express from 'express';
import VeterinarioController from '../controllers/VeterinarioController.js';

const router = express.Router();

router.post('/', VeterinarioController.criar);
router.get('/', VeterinarioController.listar);
router.get('/:id', VeterinarioController.buscar);
router.put('/:id', VeterinarioController.atualizar);
router.delete('/:id', VeterinarioController.deletar);

export default router;
