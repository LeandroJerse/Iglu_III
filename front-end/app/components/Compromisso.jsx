import { StyleSheet, Text, View } from 'react-native';

export default function Compromisso({ nome, hora, telefone, servico }) {
  return (
    <View style={styles.box}>
      <View style={styles.boxContent}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.hora}>{hora}</Text>
      </View>
      <View style={styles.boxContent}>
        <Text style={styles.telefone}>{telefone}</Text>
        <Text style={styles.servico}>{servico}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#873B3B',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical: 6,
    backgroundColor: '#FFE2E2',
    width: '100%',
    gap: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  boxContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nome: {
    color: '#A81650',
    fontSize: 17,
    fontWeight: 'bold',
  },
  hora: {
    color: '#A81650',
    fontSize: 17,
    fontWeight: 'bold',
  },
  telefone: {
    color: '#873B3B',
    fontSize: 15,
  },
  servico: {
    color: '#873B3B',
    fontSize: 15,
  },
}); 