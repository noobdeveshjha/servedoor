import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cartStore';

const menuItems = [
  { id: 101, name: 'Margherita Pizza', price: 249, desc: 'Classic cheese pizza' },
  { id: 102, name: 'Veg Biryani', price: 199, desc: 'Aromatic spiced rice' },
];

export default function RestaurantDetail({ route }: any) {
  const { restaurant } = route.params || {};
  const addItem = useCartStore((state) => state.addItem);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/400' }} style={styles.image} />
      <Text style={styles.name}>{restaurant?.name || 'Restaurant'}</Text>
      
      <Text style={styles.section}>Menu</Text>
      {menuItems.map(item => (
        <View key={item.id} style={styles.menuItem}>
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.desc}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={() => addItem(item)}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 220 },
  name: { fontSize: 24, fontWeight: 'bold', padding: 16 },
  section: { fontSize: 20, padding: 16, backgroundColor: '#f8f8f8' },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
  itemName: { fontSize: 18 },
  price: { color: 'green', fontWeight: '600' },
  addBtn: { backgroundColor: '#22c55e', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  addText: { color: 'white', fontWeight: 'bold' }
});
