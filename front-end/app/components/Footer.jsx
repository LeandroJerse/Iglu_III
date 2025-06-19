import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Footer({ onNavigate }) {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.icon} onPress={() => onNavigate('home')}>
        <Text style={styles.emoji}>🏠</Text>
      </Pressable>
      <Pressable style={styles.icon} onPress={() => onNavigate('alarms')}>
        <Text style={styles.emoji}>⏰</Text>
      </Pressable>
      <Pressable style={styles.icon} onPress={() => onNavigate('calendar')}>
        <Text style={styles.emoji}>📅</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFE2E2',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    padding: 10,
    borderRadius: 10,
  },
  emoji: {
    fontSize: 28,
  },
}); 