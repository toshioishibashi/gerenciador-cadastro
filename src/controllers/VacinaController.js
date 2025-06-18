import VacinaRepository from '../repositories/VacinaRepository.js';

export default {
  async criar(req, res) {
    const vacina = await VacinaRepository.criar(req.body);
    res.status(201).json(vacina);
  },
  async listar(req, res) {
    const vacinas = await VacinaRepository.listar();
    res.status(200).json(vacinas);
  },
  async buscar(req, res) {
    const vacina = await VacinaRepository.buscarPorId(req.params.id);
    if (!vacina) return res.status(404).json({ erro: 'Vacina não encontrada' });
    res.status(200).json(vacina);
  },
  async atualizar(req, res) {
    const atualizado = await VacinaRepository.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Vacina não encontrada' });
    res.status(200).json(atualizado);
  },
  async deletar(req, res) {
    const deletado = await VacinaRepository.deletar(req.params.id);
    if (!deletado) return res.status(404).json({ erro: 'Vacina não encontrada' });
    res.status(204).send();
  }
};
