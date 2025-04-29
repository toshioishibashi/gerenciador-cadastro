import Tutor from '../models/Tutor.js';

export default {
  async criar(dados) {
    return await Tutor.create(dados);
  },
  async listar() {
    return await Tutor.find();
  },
  async buscarPorId(id) {
    return await Tutor.findById(id);
  },
  async atualizar(id, dados) {
    return await Tutor.findByIdAndUpdate(id, dados, { new: true });
  },
  async deletar(id) {
    return await Tutor.findByIdAndDelete(id);
  }
};

