import Vacina from '../src/models/Vacina.js';
import mongoose from 'mongoose';

describe('Modelo Vacina', () => {
  it('deve criar uma nova vacina', () => {
    const petId = new mongoose.Types.ObjectId();
    const novaVacina = new Vacina({
      nome: 'V8',
      data: new Date('2024-06-01'),
      petId
    });

    expect(novaVacina.nome).toBe('V8');
    expect(novaVacina.data).toEqual(new Date('2024-06-01'));
    expect(novaVacina.petId).toEqual(petId);
  });
});
