import Veterinario from '../models/Veterinario.js';

export default {
  async criar(dados) {
    return await Veterinario.create(dados);
  },
  async listar() {
    return await Veterinario.find();
  },
  async buscarPorId(id) {
    return await Veterinario.findById(id);
  },
  async atualizar(id, dados) {
    return await Veterinario.findByIdAndUpdate(id, dados, { new: true });
  },
  async deletar(id) {
    return await Veterinario.findByIdAndDelete(id);
  }
};
