import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Name: Devesh Jha</Text>
      <Text style={styles.info}>Phone: 98xxxxxxxx</Text>
      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  info: { fontSize: 18, marginVertical: 8 },
  logout: { marginTop: 50, backgroundColor: 'red', padding: 15, borderRadius: 10, width: '80%' },
  logoutText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});
