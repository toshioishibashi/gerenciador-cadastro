import Veterinario from '../src/models/Veterinario.js';

describe('Modelo Veterinario', () => {
  it('deve criar um novo veterinário', () => {
    const novoVet = new Veterinario({
      nome: 'Dr. Silva',
      especialidade: 'Clínico Geral',
      crmv: 'SP123456'
    });

    expect(novoVet.nome).toBe('Dr. Silva');
    expect(novoVet.especialidade).toBe('Clínico Geral');
    expect(novoVet.crmv).toBe('SP123456');
  });
});
