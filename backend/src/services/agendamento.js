class AgendamentoService {
  constructor(AgendamentoModel) {
    this.agendamento = AgendamentoModel;
  }

  async get() {
    const agendamentos = await this.agendamento.findAll();
    return agendamentos.map(agendamento => agendamento.toJSON());
  }

  async adicionar(agendamentoDTO) {
    try {
      const { manicure, cliente, horario, servicos } = agendamentoDTO;

      if (!manicure || !cliente || !horario || !servicos) {
        throw new Error("Todos os campos são obrigatórios.");
      }

      await this.agendamento.create({
        manicure: manicure,
        cliente: cliente,
        horario: horario,
        servicos: servicos
      });
    } catch (error) {
      throw new Error("Erro ao adicionar agendamento: " + error.message);
    }
  }

  async getAgendamentosByManicure(manicure) {
    const agendamentos = await this.agendamento.findAll({ where: { manicure } });
    if (!agendamentos.length) {
      throw new Error("Nenhum agendamento encontrado para esta manicure.");
    }
    return agendamentos.map(agendamento => agendamento.toJSON());
  }

  async getAgendamentosByHorario(horario) {
    const agendamentos = await this.agendamento.findAll({ where: { horario } });
    if (!agendamentos.length) {
      throw new Error("Nenhum agendamento encontrado para este horário.");
    }
    return agendamentos.map(agendamento => agendamento.toJSON());
  }
}

export default AgendamentoService;