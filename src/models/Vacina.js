import mongoose from 'mongoose';

const VacinaSchema = new mongoose.Schema({
  nome: String,
  dataAplicacao: Date,
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet' },
  veterinarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Veterinario' }
});

export default mongoose.model('Vacina', VacinaSchema);
