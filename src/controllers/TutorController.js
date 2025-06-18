import TutorRepository from '../repositories/TutorRepository.js';

export default {
  async criarTutor(req, res) {
    const tutor = await TutorRepository.criar(req.body);
    res.status(201).json(tutor);
  },
  async listarTutores(req, res) {
    const tutores = await TutorRepository.listar();
    res.status(200).json(tutores);
  },
  async buscarTutor(req, res) {
    const tutor = await TutorRepository.buscarPorId(req.params.id);
    if (!tutor) return res.status(404).json({ erro: 'Tutor não encontrado' });
    res.status(200).json(tutor);
  },
  async atualizarTutor(req, res) {
    const atualizado = await TutorRepository.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ erro: 'Tutor não encontrado' });
    res.status(200).json(atualizado);
  },
  async deletarTutor(req, res) {
    const deletado = await TutorRepository.deletar(req.params.id);
    if (!deletado) return res.status(404).json({ erro: 'Tutor não encontrado' });
    res.status(204).send();
  }
};
