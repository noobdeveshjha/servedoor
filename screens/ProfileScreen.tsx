import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const [addresses, setAddresses] = useState(['Home - Gaya, Bihar', 'Office - Patna']);
  const [newAddress, setNewAddress] = useState('');

  const addAddress = () => {
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
      setNewAddress('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text>Name: Devesh Jha</Text>
      <Text>Phone: 98xxxxxxxx</Text>

      <Text style={styles.section}>Saved Addresses</Text>
      {addresses.map((addr, i) => <Text key={i} style={styles.addr}>• {addr}</Text>)}

      <TextInput
        style={styles.input}
        placeholder="Add new address"
        value={newAddress}
        onChangeText={setNewAddress}
      />
      <TouchableOpacity style={styles.addBtn} onPress={addAddress}>
        <Text style={styles.addText}>Add Address</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.walletBtn} onPress={() => { /* navigate to wallet */ }}>
        <Text>Go to Wallet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold' },
  section: { fontSize: 18, marginTop: 20, marginBottom: 10 },
  addr: { paddingVertical: 6 },
  input: { borderWidth: 1, padding: 10, borderRadius: 8, marginVertical: 10 },
  addBtn: { backgroundColor: '#3b82f6', padding: 12, borderRadius: 8, alignItems: 'center' },
  addText: { color: 'white', fontWeight: 'bold' },
  walletBtn: { marginTop: 30, backgroundColor: '#eab308', padding: 14, borderRadius: 10, alignItems: 'center' },
});
