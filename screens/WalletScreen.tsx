import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const transactions = [
  { id: 1, type: 'Added', amount: 500, date: 'Today' },
  { id: 2, type: 'Used', amount: -120, date: 'Yesterday' },
];

export default function WalletScreen() {
  const [balance, setBalance] = useState(380);
  const [addAmount, setAddAmount] = useState('');

  const addMoney = () => {
    if (addAmount) {
      setBalance(prev => prev + parseInt(addAmount));
      setAddAmount('');
      alert('Money added successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Wallet</Text>
      <Text style={styles.balance}>Balance: ₹{balance}</Text>

      <View style={styles.addSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter amount to add"
          keyboardType="numeric"
          value={addAmount}
          onChangeText={setAddAmount}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addMoney}>
          <Text style={styles.addText}>Add Money</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.historyTitle}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tx}>
            <Text>{item.type} ₹{Math.abs(item.amount)}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 26, fontWeight: 'bold' },
  balance: { fontSize: 32, color: 'green', marginVertical: 20 },
  addSection: { marginVertical: 20 },
  input: { borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 10 },
  addBtn: { backgroundColor: '#22c55e', padding: 14, borderRadius: 10, alignItems: 'center' },
  addText: { color: 'white', fontWeight: 'bold' },
  historyTitle: { fontSize: 18, marginVertical: 10 },
  tx: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1 },
});
