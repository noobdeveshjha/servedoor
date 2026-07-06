import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const restaurants = [
  { id: 1, name: 'Pizza Palace', rating: 4.5, time: '25 min', image: 'https://picsum.photos/200' },
  { id: 2, name: 'Biryani House', rating: 4.3, time: '30 min', image: 'https://picsum.photos/201' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Servedoor - Order Now!</Text>
      
      <View style={styles.searchBar}>
        <Text>🔍 Search restaurants or dishes...</Text>
      </View>

      <Text style={styles.sectionTitle}>Popular Restaurants</Text>
      {restaurants.map((res) => (
        <TouchableOpacity key={res.id} style={styles.card}>
          <Image source={{ uri: res.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{res.name}</Text>
            <Text>{res.rating} ⭐ • {res.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  searchBar: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#fff', elevation: 3 },
  image: { width: '100%', height: 180 },
  info: { padding: 12 },
  name: { fontSize: 18, fontWeight: 'bold' },
});
