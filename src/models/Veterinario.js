import mongoose from 'mongoose';

const VeterinarioSchema = new mongoose.Schema({
  nome: String,
  crmv: String,
  especialidade: String
});

export default mongoose.model('Veterinario', VeterinarioSchema);
