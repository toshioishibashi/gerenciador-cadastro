import VeterinarioRepository from '../repositories/VeterinarioRepository.js';

export default {
  async criar(req, res) {
    const vet = await VeterinarioRepository.criar(req.body);
    res.status(201).json(vet);
  },
  async listar(req, res) {
    const vets = await VeterinarioRepository.listar();
    res.status(200).json(vets);
  },
  async buscar(req, res) {
    const vet = await VeterinarioRepository.buscarPorId(req.params.id);
    if (!vet) return res.status(404).json({ erro: 'Veterinário não encontrado' });
    res.status(200).json(vet);
  },
  async atualizar(req, res) {
    const atualizado = await VeterinarioRepository.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Veterinário não encontrado' });
    res.status(200).json(atualizado);
  },
  async deletar(req, res) {
    const deletado = await VeterinarioRepository.deletar(req.params.id);
    if (!deletado) return res.status(404).json({ erro: 'Veterinário não encontrado' });
    res.status(204).send();
  }
};
