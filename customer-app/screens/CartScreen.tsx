import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useCartStore } from '../store/cartStore';

export default function CartScreen({ navigation }: any) {
  const { items, totalPrice, removeItem, increaseQuantity, decreaseQuantity, clearCart } = useCartStore();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'SAVE20') { setDiscount(20); Alert.alert('Success', '20% off applied!'); }
    else Alert.alert('Invalid Coupon', 'Try: SAVE20');
  };

  const finalTotal = totalPrice() - (totalPrice() * discount / 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {items.length === 0 ? <Text>Cart is empty</Text> : (
        <>
          <FlatList data={items} keyExtractor={i => i.id.toString()} renderItem={({item}) => (
            <View style={styles.item}>
              <Text>{item.name} × {item.quantity}</Text>
              <Text>₹{item.price * item.quantity}</Text>
              <View style={{flexDirection:'row', gap:10}}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}><Text style={{fontSize:22}}>-</Text></TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)}><Text style={{fontSize:22}}>+</Text></TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => removeItem(item.id)}><Text style={{color:'red'}}>Remove</Text></TouchableOpacity>
            </View>
          )} />
          <View style={{flexDirection:'row', marginVertical:16}}>
            <TextInput style={styles.input} placeholder="Coupon (SAVE20)" value={coupon} onChangeText={setCoupon} />
            <TouchableOpacity style={styles.applyBtn} onPress={applyCoupon}><Text>Apply</Text></TouchableOpacity>
          </View>
          <Text style={styles.total}>Total: ₹{finalTotal}</Text>
          <TouchableOpacity style={styles.payBtn} onPress={() => navigation.navigate('Payment', {finalTotal})}>
            <Text style={styles.payText}>Proceed to Pay</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({ container:{flex:1,padding:16}, title:{fontSize:24,fontWeight:'bold'}, item:{flexDirection:'row',justifyContent:'space-between',padding:12,borderBottomWidth:1}, input:{flex:1,borderWidth:1,padding:10,borderRadius:8}, applyBtn:{backgroundColor:'#eab308',padding:12,borderRadius:8,marginLeft:8}, total:{fontSize:22,fontWeight:'bold',marginVertical:20}, payBtn:{backgroundColor:'#f97316',padding:16,borderRadius:12,alignItems:'center'}, payText:{color:'white',fontSize:18,fontWeight:'bold'} });
