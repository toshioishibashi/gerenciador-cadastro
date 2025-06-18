import Vacina from '../models/Vacina.js';

export default {
  async criar(dados) {
    return await Vacina.create(dados);
  },
  async listar() {
    return await Vacina.find().populate('petId').populate('veterinarioId');
  },
  async buscarPorId(id) {
    return await Vacina.findById(id).populate('petId').populate('veterinarioId');
  },
  async atualizar(id, dados) {
    return await Vacina.findByIdAndUpdate(id, dados, { new: true });
  },
  async deletar(id) {
    return await Vacina.findByIdAndDelete(id);
  }
};
