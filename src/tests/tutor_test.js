import Tutor from '../src/models/Tutor.js';

describe('Modelo Tutor', () => {
  it('deve criar um novo tutor', () => {
    const novoTutor = new Tutor({
      nome: 'Ana',
      email: 'ana@email.com',
      telefone: '11999999999',
      endereco: 'Rua das Flores, 123'
    });

    expect(novoTutor.nome).toBe('Ana');
    expect(novoTutor.email).toBe('ana@email.com');
    expect(novoTutor.telefone).toBe('11999999999');
    expect(novoTutor.endereco).toBe('Rua das Flores, 123');
  });
});
