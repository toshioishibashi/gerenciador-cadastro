import express from 'express';
import PetController from '../controllers/PetController.js';

const router = express.Router();

router.post('/pets', PetController.criarPet);
router.get('/pets', PetController.listarPets);
router.get('/pets/:id', PetController.buscarPet);
router.put('/pets/:id', PetController.atualizarPet);
router.delete('/pets/:id', PetController.deletarPet);

export default router;
