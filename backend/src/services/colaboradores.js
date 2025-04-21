class ColaboradorService {
  constructor(ColaboradorModel) {
    this.colaborador = ColaboradorModel;
  }

  async get() {
    const colaboradores = await this.colaborador.findAll();
    return colaboradores.map(colaborador => colaborador.toJSON());
  }

  async adicionar(colaboradorDTO) {
    try {
      const { cpf, name, ownerCpf } = colaboradorDTO;

      if (!cpf || !name || !ownerCpf) {
        throw new Error("Todos os campos são obrigatórios.");
      }

      await this.colaborador.create({
        cpf: cpf,
        name: name,
        ownerCpf: ownerCpf
      });
    } catch (error) {
      throw new Error("Erro ao adicionar colaborador: " + error.message);
    }
  }

  async getColaboradorByCpf(cpf) {
    const colaborador = await this.colaborador.findOne({ where: { cpf } });
    if (!colaborador) {
      throw new Error("Colaborador não encontrado.");
    }
    return colaborador.toJSON();
  }

  async getColaboradoresByOwnerCpf(ownerCpf) {
    const colaboradores = await this.colaborador.findAll({ where: { ownerCpf } });
    if (!colaboradores.length) {
      throw new Error("Nenhum colaborador encontrado para este administrador.");
    }
    return colaboradores.map(colaborador => colaborador.toJSON());
  }
}

export default ColaboradorService;