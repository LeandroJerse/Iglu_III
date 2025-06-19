import { StyleSheet, Text, View } from 'react-native';
import Compromisso from './Compromisso';

export default function ListaDeCompromissos({ compromissos }) {
  if (!compromissos) return null;
  return (
    <View style={styles.container}>
      {['Manhã', 'Tarde', 'Noite'].map(periodo => (
        compromissos[periodo.toLowerCase()] && compromissos[periodo.toLowerCase()].length > 0 ? (
          <View key={periodo} style={styles.periodo}>
            <Text style={styles.titulo}>{periodo}</Text>
            {compromissos[periodo.toLowerCase()].map((c, idx) => (
              <Compromisso key={idx} {...c} />
            ))}
          </View>
        ) : null
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
  periodo: {
    marginBottom: 10,
  },
  titulo: {
    color: '#A81650',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 8,
  },
}); 