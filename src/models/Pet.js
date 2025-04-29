import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  nome: String,
  especie: String,
  idade: Number,
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor'
  }
});

const Pet = mongoose.model('Pet', PetSchema);
export default Pet;
