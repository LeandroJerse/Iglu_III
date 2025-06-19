import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const periodos = ['manhã', 'tarde', 'noite'];
const dias = [
  { id: 'segunda', label: 'Segunda' },
  { id: 'terça', label: 'Terça' },
  { id: 'quarta', label: 'Quarta' },
  { id: 'quinta', label: 'Quinta' },
  { id: 'sexta', label: 'Sexta' },
  { id: 'sabado', label: 'Sábado' },
];

export default function CriarAgendamento({ onAgendamentoCriado, onVoltar }) {
  const [nome, setNome] = useState('');
  const [hora, setHora] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');
  const [periodo, setPeriodo] = useState(periodos[0]);
  const [dia, setDia] = useState(dias[0].id);

  const handleSalvar = async () => {
    if (!nome || !hora || !telefone || !servico) {
      Alert.alert('Preencha todos os campos!');
      return;
    }
    const novo = { nome, hora, telefone, servico, periodo, dia };
    try {
      const res = await fetch('http://localhost:3001/agendamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novo),
      });
      if (res.ok) {
        Alert.alert('Agendamento criado com sucesso!');
        onAgendamentoCriado();
      } else {
        Alert.alert('Erro ao criar agendamento!');
      }
    } catch (e) {
      Alert.alert('Erro de conexão com o backend!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Novo Agendamento</Text>
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Hora (ex: 14:00)" value={hora} onChangeText={setHora} />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Serviço" value={servico} onChangeText={setServico} />
      <Text style={styles.label}>Período:</Text>
      <View style={styles.row}>
        {periodos.map(p => (
          <Button key={p} title={p} color={periodo === p ? '#A81650' : '#ccc'} onPress={() => setPeriodo(p)} />
        ))}
      </View>
      <Text style={styles.label}>Dia da semana:</Text>
      <View style={styles.row}>
        {dias.map(d => (
          <Button key={d.id} title={d.label} color={dia === d.id ? '#A81650' : '#ccc'} onPress={() => setDia(d.id)} />
        ))}
      </View>
      <View style={styles.row}>
        <Button title="Salvar" onPress={handleSalvar} color="#A81650" />
        <Button title="Voltar" onPress={onVoltar} color="#873B3B" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A81650',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#A81650',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    color: '#A81650',
    marginTop: 10,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
    justifyContent: 'center',
  },
}); 