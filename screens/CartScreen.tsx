import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useCartStore } from '../store/cartStore';

export default function CartScreen({ navigation }: any) {
  const { items, totalPrice, removeItem, increaseQuantity, decreaseQuantity, clearCart } = useCartStore();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'SAVE20') {
      setDiscount(20);
      Alert.alert('Success', '20% discount applied!');
    } else {
      Alert.alert('Invalid', 'Try coupon: SAVE20');
    }
  };

  const finalTotal = totalPrice() - (totalPrice() * discount / 100);

  const handleOrder = () => {
    if (items.length === 0) return;
    navigation.navigate('Payment', { finalTotal });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {items.length === 0 ? <Text>Cart is empty</Text> : (
        <>
          <FlatList
            data={items}
            keyExtractor={i => i.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item.name} x{item.quantity}</Text>
                <Text>₹{item.price * item.quantity}</Text>
                <View style={styles.qty}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)}><Text>-</Text></TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)}><Text>+</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)}><Text style={{color:'red'}}>Remove</Text></TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.couponSection}>
            <TextInput style={styles.input} placeholder="Enter Coupon (SAVE20)" value={coupon} onChangeText={setCoupon} />
            <TouchableOpacity style={styles.applyBtn} onPress={applyCoupon}><Text>Apply</Text></TouchableOpacity>
          </View>

          <Text style={styles.total}>Total: ₹{finalTotal}</Text>
          <TouchableOpacity style={styles.orderBtn} onPress={handleOrder}>
            <Text style={styles.orderText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1 },
  qty: { flexDirection: 'row', gap: 12 },
  couponSection: { flexDirection: 'row', marginVertical: 16 },
  input: { flex: 1, borderWidth: 1, padding: 10, borderRadius: 8 },
  applyBtn: { backgroundColor: '#eab308', padding: 12, borderRadius: 8, marginLeft: 10 },
  total: { fontSize: 22, fontWeight: 'bold', marginVertical: 20 },
  orderBtn: { backgroundColor: '#f97316', padding: 16, borderRadius: 12, alignItems: 'center' },
  orderText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
