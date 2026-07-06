import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  const [addresses, setAddresses] = useState(['Home - Muzaffarpur, Bihar', 'Office - Patna']);
  const [newAddr, setNewAddr] = useState('');
  const addAddress = () => { if(newAddr) { setAddresses([...addresses, newAddr]); setNewAddr(''); } };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text>Devesh Jha • 98xxxxxxxx</Text>
      <Text style={styles.section}>Saved Addresses</Text>
      {addresses.map((a,i) => <Text key={i}>• {a}</Text>)}
      <TextInput style={styles.input} placeholder="Add new address" value={newAddr} onChangeText={setNewAddr} />
      <TouchableOpacity style={styles.addBtn} onPress={addAddress}><Text style={{color:'white'}}>Add Address</Text></TouchableOpacity>
      <TouchableOpacity style={styles.walletBtn} onPress={() => navigation.navigate('Wallet')}><Text>Go to Wallet</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1,padding:20}, title:{fontSize:26,fontWeight:'bold'}, section:{fontSize:18,marginTop:20}, input:{borderWidth:1,padding:10,borderRadius:8,marginVertical:10}, addBtn:{backgroundColor:'#3b82f6',padding:12,borderRadius:8,alignItems:'center',marginTop:10}, walletBtn:{marginTop:40,backgroundColor:'#eab308',padding:14,borderRadius:10,alignItems:'center'} });
