class ClienteService {
  constructor(ClienteModel) {
    this.cliente = ClienteModel;
  }

  async get() {
    const clientes = await this.cliente.findAll();
    return clientes.map(cliente => cliente.toJSON());
  }

  async adicionar(clienteDTO) {
    try {
      const { cpf, nome } = clienteDTO;

      if (!cpf || !nome) {
        throw new Error("Todos os campos são obrigatórios.");
      }

      await this.cliente.create({
        cpf: cpf,
        nome: nome
      });
    } catch (error) {
      throw new Error("Erro ao adicionar cliente: " + error.message);
    }
  }

  async getClienteByCpf(cpf) {
    const cliente = await this.cliente.findOne({ where: { cpf } });
    if (!cliente) {
      throw new Error("Cliente não encontrado.");
    }
    return cliente.toJSON();
  }
}

export default ClienteService;