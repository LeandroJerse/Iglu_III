import { Pressable, StyleSheet, Text } from 'react-native';

export default function DiaDaSemana({ dia, numero, ativo, onPress }) {
  return (
    <Pressable style={[styles.container, ativo && styles.ativo]} onPress={onPress}>
      <Text style={[styles.text, ativo && styles.textAtivo]}>{dia}</Text>
      <Text style={[styles.numero, ativo && styles.numeroAtivo]}>{numero}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginHorizontal: 2,
    backgroundColor: '#FFE2E2',
    minWidth: 48,
    minHeight: 56,
  },
  ativo: {
    backgroundColor: '#A81650',
    shadowColor: '#A81650',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: '#873B3B',
    fontSize: 15,
    fontWeight: '600',
  },
  textAtivo: {
    color: '#FFF',
  },
  numero: {
    color: '#873B3B',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  numeroAtivo: {
    color: '#FFF',
  },
}); 