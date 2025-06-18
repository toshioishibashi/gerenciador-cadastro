import Pet from '../src/models/Pet.js';
import mongoose from 'mongoose';

describe('Modelo Pet', () => {
  it('deve criar um novo pet', () => {
    const tutorId = new mongoose.Types.ObjectId();
    const novoPet = new Pet({
      nome: 'Bolt',
      especie: 'Cachorro',
      raca: 'Labrador',
      idade: 3,
      tutorId
    });

    expect(novoPet.nome).toBe('Bolt');
    expect(novoPet.especie).toBe('Cachorro');
    expect(novoPet.raca).toBe('Labrador');
    expect(novoPet.idade).toBe(3);
    expect(novoPet.tutorId).toEqual(tutorId);
  });
});
