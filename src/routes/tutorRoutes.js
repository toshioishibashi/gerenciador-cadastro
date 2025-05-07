import express from 'express';
import TutorController from '../controllers/TutorController.js';

const router = express.Router();

router.post('/tutores', TutorController.criarTutor);
router.get('/tutores', TutorController.listarTutores);
router.get('/tutores/:id', TutorController.buscarTutor);
router.put('/tutores/:id', TutorController.atualizarTutor);
router.delete('/tutores/:id', TutorController.deletarTutor);

export default router;
