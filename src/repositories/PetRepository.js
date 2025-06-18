import Pet from '../models/Pet.js';

export default {
  async criar(dados) {
    return await Pet.create(dados);
  },
  async listar() {
    return await Pet.find().populate('tutorId');
  },
  async buscarPorId(id) {
    return await Pet.findById(id).populate('tutorId');
  },
  async atualizar(id, dados) {
    return await Pet.findByIdAndUpdate(id, dados, { new: true });
  },
  async deletar(id) {
    return await Pet.findByIdAndDelete(id);
  }
};
