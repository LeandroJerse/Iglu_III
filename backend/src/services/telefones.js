class TelefoneService {
  constructor(TelefoneModel) {
    this.telefone = TelefoneModel;
  }

  async get() {
    const telefones = await this.telefone.findAll();
    return telefones.map(telefone => telefone.toJSON());
  }

  async adicionar(telefoneDTO) {
    try {
      const { telefone, clienteCpf } = telefoneDTO;

      if (!telefone || !clienteCpf) {
        throw new Error("Todos os campos são obrigatórios.");
      }

      await this.telefone.create({
        telefone: telefone,
        clienteCpf: clienteCpf
      });
    } catch (error) {
      throw new Error("Erro ao adicionar telefone: " + error.message);
    }
  }

  async getTelefonesByClienteCpf(clienteCpf) {
    const telefones = await this.telefone.findAll({ where: { clienteCpf } });
    if (!telefones.length) {
      throw new Error("Nenhum telefone encontrado para este cliente.");
    }
    return telefones.map(telefone => telefone.toJSON());
  }
}

export default TelefoneService;