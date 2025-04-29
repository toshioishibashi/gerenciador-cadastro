import PetRepository from '../repositories/PetRepository.js';

export default {
  async criarPet(req, res) {
    const pet = await PetRepository.criar(req.body);
    res.status(201).json(pet);
  },
  async listarPets(req, res) {
    const pets = await PetRepository.listar();
    res.status(200).json(pets);
  },
  async buscarPet(req, res) {
    const pet = await PetRepository.buscarPorId(req.params.id);
    if (!pet) return res.status(404).json({ erro: 'Pet não encontrado' });
    res.status(200).json(pet);
  },
  async atualizarPet(req, res) {
    const atualizado = await PetRepository.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Pet não encontrado' });
    res.status(200).json(atualizado);
  },
  async deletarPet(req, res) {
    const deletado = await PetRepository.deletar(req.params.id);
    if (!deletado) return res.status(404).json({ erro: 'Pet não encontrado' });
    res.status(204).send();
  }
};

