import { useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, StyleSheet, View } from "react-native";
import DiaDaSemana from "./components/DiaDaSemana";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListaDeCompromissos from "./components/ListaDeCompromissos";
import CriarAgendamento from "./CriarAgendamento";

const diasSemana = [
  { id: 'segunda', label: 'Seg', numero: 1 },
  { id: 'terça', label: 'Ter', numero: 2 },
  { id: 'quarta', label: 'Qua', numero: 3 },
  { id: 'quinta', label: 'Qui', numero: 4 },
  { id: 'sexta', label: 'Sex', numero: 5 },
  { id: 'sabado', label: 'Sab', numero: 6 },
];

// Compromissos de exemplo para cada dia
const compromissosPorDia = {
  segunda: {
    manhã: [
      { nome: 'Camila F.', hora: '08:45', telefone: '98765-4321', servico: 'Pé e mão' },
    ],
    tarde: [
      { nome: 'Larissa G.', hora: '14:00', telefone: '98876-5432', servico: 'Pé e mão' },
    ],
    noite: [
      { nome: 'Aline C.', hora: '18:15', telefone: '99543-2109', servico: 'Pé e mão' },
    ],
  },
  terça: {
    manhã: [
      { nome: 'Patrícia L.', hora: '09:30', telefone: '99654-3210', servico: 'Pé e mão' },
    ],
    tarde: [],
    noite: [],
  },
  quarta: {
    manhã: [],
    tarde: [
      { nome: 'Camila F.', hora: '15:00', telefone: '98765-4321', servico: 'Pé e mão' },
    ],
    noite: [],
  },
  quinta: {
    manhã: [
      { nome: 'Larissa G.', hora: '10:00', telefone: '98876-5432', servico: 'Pé e mão' },
    ],
    tarde: [
      { nome: 'Patrícia L.', hora: '14:30', telefone: '99654-3210', servico: 'Pé e mão' },
    ],
    noite: [
      { nome: 'Aline C.', hora: '17:15', telefone: '99543-2109', servico: 'Pé e mão' },
    ],
  },
  sexta: {
    manhã: [],
    tarde: [],
    noite: [],
  },
  sabado: {
    manhã: [],
    tarde: [],
    noite: [],
  },
};

export default function Index() {
  const [diaSelecionado, setDiaSelecionado] = useState(diasSemana[0].id);
  const [compromissos, setCompromissos] = useState({});
  const [tela, setTela] = useState('principal');

  // Carregar compromissos do back-end
  const carregarCompromissos = async () => {
    const res = await fetch('http://localhost:3001/agendamentos');
    const data = await res.json();
    // Organizar por dia e período
    const porDia = {};
    diasSemana.forEach(d => porDia[d.id] = { manhã: [], tarde: [], noite: [] });
    data.forEach(c => {
      // Supondo que c.data seja 'YYYY-MM-DD' e c.periodo seja 'manhã', 'tarde' ou 'noite'
      // Aqui, para simplificar, vamos usar o dia da semana como chave
      // Em produção, use a data real!
      const dia = c.dia || 'segunda'; // Ajuste conforme sua lógica
      if (porDia[dia]) porDia[dia][c.periodo].push(c);
    });
    setCompromissos(porDia);
  };

  useEffect(() => { carregarCompromissos(); }, []);

  const handleDiaPress = (id) => {
    setDiaSelecionado(id);
  };

  const handleNovoAgendamento = () => setTela('criar');
  const handleAgendamentoCriado = () => {
    setTela('principal');
    carregarCompromissos();
  };

  if (tela === 'criar') {
    return <CriarAgendamento onAgendamentoCriado={handleAgendamentoCriado} onVoltar={() => setTela('principal')} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Meus agendamentos" />
      <View style={styles.textMonth}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {diasSemana.map((dia) => (
            <DiaDaSemana
              key={dia.id}
              dia={dia.label}
              numero={dia.numero}
              ativo={diaSelecionado === dia.id}
              onPress={() => handleDiaPress(dia.id)}
            />
          ))}
        </ScrollView>
      </View>
      <Button title="Novo Agendamento" onPress={handleNovoAgendamento} color="#A81650" />
      <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 20 }}>
        <ListaDeCompromissos compromissos={compromissos[diaSelecionado]} />
      </ScrollView>
      <Footer onNavigate={() => {}} />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#F8F8F8',
    width: '100%',
  },
  textMonth: {
    paddingTop: 18,
    paddingBottom: 8,
    width: '100%',
    alignItems: 'center',
  },
  scroll: {
    width: "95%",
    alignSelf: 'center',
  },
});
