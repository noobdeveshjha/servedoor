import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const allRestaurants = [
  { id: 1, name: 'Pizza Palace', cuisine: 'Italian' },
  { id: 2, name: 'Biryani House', cuisine: 'Indian' },
  { id: 3, name: 'Burger King', cuisine: 'Fast Food' },
];

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const filtered = allRestaurants.filter(r => 
    r.name.toLowerCase().includes(search.toLowerCase()) || 
    r.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search restaurants or food..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.result}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.cuisine}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, marginBottom: 16 },
  result: { padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
  name: { fontSize: 18, fontWeight: '600' }
});
