import React from 'react';
import { View, Text } from 'react-native';

export default function RestaurantApp() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:24}}>Restaurant Owner App</Text>
      <Text>Orders | Menu Management | Earnings</Text>
    </View>
  );
}
