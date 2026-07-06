import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const incomingOrders = [
  { id: 1, customer: 'Rahul', items: 'Pizza x2', status: 'New' },
  { id: 2, customer: 'Priya', items: 'Biryani', status: 'Preparing' }
];

export default function RestaurantOwnerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Owner Dashboard</Text>
      <Text style={styles.subtitle}>Incoming Orders</Text>
      <FlatList
        data={incomingOrders}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text>{item.customer} - {item.items}</Text>
            <Text style={styles.status}>{item.status}</Text>
            <TouchableOpacity style={styles.acceptBtn}>
              <Text>Accept / Update Status</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginVertical: 12 },
  orderCard: { padding: 16, backgroundColor: '#f8f8f8', marginBottom: 12, borderRadius: 10 },
  status: { color: 'orange', fontWeight: 'bold' },
  acceptBtn: { backgroundColor: '#22c55e', padding: 10, borderRadius: 8, marginTop: 8, alignItems: 'center' }
});
