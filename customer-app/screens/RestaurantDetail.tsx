import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cartStore';

const menu = [
  { id: 101, name: 'Margherita Pizza', price: 249, desc: 'Classic cheese pizza', type: 'Veg' },
  { id: 102, name: 'Chicken Biryani', price: 299, desc: 'Spicy chicken biryani', type: 'Non-Veg' },
];

export default function RestaurantDetail({ route, navigation }: any) {
  const { restaurant } = route.params || {};
  const addItem = useCartStore(s => s.addItem);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  return (
    <ScrollView style={{flex:1}}>
      <Image source={{uri: 'https://picsum.photos/400'}} style={{width:'100%', height:200}} />
      <Text style={{fontSize:24, fontWeight:'bold', padding:16}}>{restaurant?.name}</Text>
      <Text style={{paddingHorizontal:16, fontSize:18}}>Menu</Text>
      {menu.map(item => (
        <View key={item.id} style={{flexDirection:'row', justifyContent:'space-between', padding:16, borderBottomWidth:1}}>
          <View><Text style={{fontSize:16}}>{item.name} ({item.type})</Text><Text>₹{item.price}</Text></View>
          <TouchableOpacity style={{backgroundColor:'#22c55e', paddingHorizontal:16, paddingVertical:8, borderRadius:20}} onPress={() => addItem(item)}>
            <Text style={{color:'white', fontWeight:'bold'}}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text style={{padding:16, fontSize:18, backgroundColor:'#f8f8f8'}}>Rate & Review</Text>
      <View style={{flexDirection:'row', padding:16, gap:8}}>
        {[1,2,3,4,5].map(s => <TouchableOpacity key={s} onPress={() => setRating(s)}><Text style={{fontSize:28, color: s <= rating ? '#facc15' : '#ccc'}}>★</Text></TouchableOpacity>)}
      </View>
      <TextInput style={{borderWidth:1, margin:16, padding:12, borderRadius:8, height:80}} placeholder="Write review..." value={review} onChangeText={setReview} multiline />
      <TouchableOpacity style={{backgroundColor:'#f97316', margin:16, padding:14, borderRadius:10, alignItems:'center'}} onPress={() => alert('Review submitted!')}>
        <Text style={{color:'white', fontWeight:'bold'}}>Submit Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
