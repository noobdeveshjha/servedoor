import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cartStore';

export default function CartScreen() {
  const { items, totalPrice, removeItem, increaseQuantity, decreaseQuantity, clearCart } = useCartStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      
      {items.length === 0 ? (
        <Text style={styles.empty}>Cart is empty. Add some food! 🍔</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>₹{item.price} x {item.quantity}</Text>
                <View style={styles.quantityControls}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}><Text>-</Text></TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}><Text>+</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Text style={styles.total}>Total: ₹{totalPrice()}</Text>
          <TouchableOpacity style={styles.orderButton} onPress={clearCart}>
            <Text style={styles.orderText}>Place Order</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  empty: { fontSize: 18, textAlign: 'center', marginTop: 100 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  quantityControls: { flexDirection: 'row', gap: 10 },
  remove: { color: 'red' },
  total: { fontSize: 20, fontWeight: 'bold', marginVertical: 20 },
  orderButton: { backgroundColor: '#f97316', padding: 16, borderRadius: 12, alignItems: 'center' },
  orderText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
