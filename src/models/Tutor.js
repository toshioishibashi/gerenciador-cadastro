import mongoose from 'mongoose';

const TutorSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String
});

const Tutor = mongoose.model('Tutor', TutorSchema);
export default Tutor;
