import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const allOrders = [
  { id: 101, customer: 'Amit', restaurant: 'Pizza Palace', amount: 498, status: 'Delivered' },
  { id: 102, customer: 'Sneha', restaurant: 'Biryani House', amount: 199, status: 'On the way' }
];

export default function AdminPanel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={styles.stats}>Total Orders Today: 142 | Revenue: ₹45,000</Text>
      <FlatList
        data={allOrders}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.order}>
            <Text>#{item.id} - {item.customer} ({item.restaurant})</Text>
            <Text>₹{item.amount} - {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 26, fontWeight: 'bold' },
  stats: { fontSize: 16, marginVertical: 12, color: '#666' },
  order: { padding: 14, backgroundColor: '#fff', marginBottom: 10, borderRadius: 8, elevation: 2 }
});
