import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useCartStore } from '../store/cartStore';

export default function PaymentScreen({ navigation }: any) {
  const { totalPrice, clearCart } = useCartStore();

  const handlePayment = () => {
    // Fake Razorpay integration
    Alert.alert('Payment Successful', `₹${totalPrice()} paid via UPI/Razorpay`, [
      { text: 'OK', onPress: () => { clearCart(); navigation.navigate('Home'); } }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Text style={styles.amount}>Total: ₹{totalPrice()}</Text>
      <TouchableOpacity style={styles.payBtn} onPress={handlePayment}>
        <Text style={styles.payText}>Pay with Razorpay / UPI</Text>
      </TouchableOpacity>
      <Text style={styles.note}>Demo Mode - Real integration needs Razorpay keys</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold' },
  amount: { fontSize: 32, color: 'green', marginVertical: 30 },
  payBtn: { backgroundColor: '#f97316', padding: 20, borderRadius: 12, width: '100%' },
  payText: { color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' },
  note: { marginTop: 30, color: '#666' }
});
