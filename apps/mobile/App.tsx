import type { RestaurantSummary } from '@chakula/shared';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const pilotRestaurants: RestaurantSummary[] = [
  {
    id: 'roots',
    name: 'Roots & Co',
    address: 'Golf, Lubumbashi',
    coordinates: { lat: -11.65, lng: 27.48 },
    isOpen: true,
    cuisineTags: ['healthy', 'brunch'],
  },
  {
    id: 'street-food-lb',
    name: 'Street Food LB',
    address: 'Kasapa',
    coordinates: { lat: -11.67, lng: 27.46 },
    isOpen: false,
    cuisineTags: ['street', 'bbq'],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.badge}>v0.2.0</Text>
        <Text style={styles.title}>Chakula</Text>
        <Text style={styles.subtitle}>
          Authentification de base et schémas de données sont prêts. Les écrans MVP
          arriveront en v0.4.0.
        </Text>
      </View>

      <FlatList
        data={pilotRestaurants}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardAddress}>{item.address}</Text>
            <View style={styles.tagRow}>
              {item.cuisineTags.map((tag) => (
                <Text key={tag} style={styles.tag}>
                  {tag.toUpperCase()}
                </Text>
              ))}
            </View>
            <Text style={[styles.status, item.isOpen ? styles.open : styles.closed]}>
              {item.isOpen ? 'OUVERT' : 'FERMÉ'}
            </Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050606',
    paddingHorizontal: 24,
    gap: 16,
  },
  header: {
    paddingTop: 32,
    gap: 12,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    color: '#050606',
    backgroundColor: '#f7c846',
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#f2f2f2',
  },
  subtitle: {
    fontSize: 16,
    color: '#cfcfcf',
    lineHeight: 22,
  },
  list: {
    paddingBottom: 48,
    gap: 16,
  },
  card: {
    backgroundColor: '#111214',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1f2125',
    gap: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  cardAddress: {
    color: '#9ea2ac',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
  },
  tag: {
    fontSize: 11,
    color: '#f7c846',
    borderColor: '#f7c846',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  status: {
    marginTop: 10,
    fontWeight: '700',
    letterSpacing: 3,
  },
  open: {
    color: '#6be675',
  },
  closed: {
    color: '#f86565',
  },
});
