class AdministradorService {
  constructor(AdministradorModel) {
    this.administrador = AdministradorModel;
  }

  async get() {
    const administradores = await this.administrador.findAll();
    return administradores.map(administrador => administrador.toJSON());
  }

  async adicionar(administradorDTO) {
    try {
      const { cpf, nome } = administradorDTO;

      if (!cpf || !nome) {
        throw new Error("Todos os campos são obrigatórios.");
      }

      await this.administrador.create({
        cpf: cpf,
        nome: nome
      });
    } catch (error) {
      throw new Error("Erro ao adicionar administrador: " + error.message);
    }
  }

  async getAdministradorByCpf(cpf) {
    const administrador = await this.administrador.findOne({ where: { cpf } });
    if (!administrador) {
      throw new Error("Administrador não encontrado.");
    }
    return administrador.toJSON();
  }
}

export default AdministradorService;