import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFE2E2',
    width: '100%',
    paddingVertical: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textHeader: {
    color: '#873B3B',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
}); 