import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const allRestaurants = [
  { id: 1, name: 'Pizza Palace', rating: 4.5, time: '25 min', cuisine: 'Italian', type: 'Non-Veg', image: 'https://picsum.photos/200' },
  { id: 2, name: 'Biryani House', rating: 4.3, time: '30 min', cuisine: 'Indian', type: 'Both', image: 'https://picsum.photos/201' },
  { id: 3, name: 'Green Salad', rating: 4.7, time: '15 min', cuisine: 'Healthy', type: 'Veg', image: 'https://picsum.photos/202' },
];

export default function HomeScreen({ navigation }: any) {
  const [filter, setFilter] = useState<'All' | 'Veg' | 'Non-Veg'>('All');
  const [search, setSearch] = useState('');

  const filtered = allRestaurants.filter(r => {
    const matchesType = filter === 'All' || r.type === filter || (filter === 'Veg' && r.type === 'Both');
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.cuisine.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Servedoor</Text>
      
      <TextInput
        style={styles.search}
        placeholder="Search restaurants or cuisine..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.filterRow}>
        {['All', 'Veg', 'Non-Veg'].map(f => (
          <TouchableOpacity key={f} style={[styles.filterBtn, filter === f && styles.activeFilter]} onPress={() => setFilter(f as any)}>
            <Text>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.section}>Popular near you</Text>
      {filtered.map(res => (
        <TouchableOpacity key={res.id} style={styles.card} onPress={() => navigation.navigate('RestaurantDetail', { restaurant: res })}>
          <Image source={{ uri: res.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{res.name}</Text>
            <Text>{res.rating} ⭐ • {res.time} • {res.type}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 28, fontWeight: 'bold' },
  search: { backgroundColor: '#f1f1f1', padding: 12, borderRadius: 10, marginVertical: 12 },
  filterRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  filterBtn: { paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#eee', borderRadius: 20 },
  activeFilter: { backgroundColor: '#f97316', color: 'white' },
  section: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#fff', elevation: 3 },
  image: { width: '100%', height: 160 },
  info: { padding: 12 },
  name: { fontSize: 18, fontWeight: 'bold' },
});
