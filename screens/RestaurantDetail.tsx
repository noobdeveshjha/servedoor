import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useCartStore } from '../store/cartStore';

const menuItems = [
  { id: 101, name: 'Margherita Pizza', price: 249, desc: 'Classic cheese pizza', type: 'Veg' },
  { id: 102, name: 'Chicken Biryani', price: 299, desc: 'Spicy chicken biryani', type: 'Non-Veg' },
];

export default function RestaurantDetail({ route }: any) {
  const { restaurant } = route.params || {};
  const addItem = useCartStore((state) => state.addItem);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const submitReview = () => {
    alert(`Thanks for rating ${rating} stars! Review submitted.`);
    setReview('');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/400' }} style={styles.image} />
      <Text style={styles.name}>{restaurant?.name}</Text>

      <Text style={styles.section}>Menu</Text>
      {menuItems.map(item => (
        <View key={item.id} style={styles.menuItem}>
          <View>
            <Text style={styles.itemName}>{item.name} ({item.type})</Text>
            <Text>₹{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={() => addItem(item)}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.section}>Rate & Review</Text>
      <View style={styles.ratingRow}>
        {[1,2,3,4,5].map(star => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Text style={{ fontSize: 28, color: star <= rating ? '#facc15' : '#ccc' }}>★</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.reviewInput}
        placeholder="Write your review..."
        value={review}
        onChangeText={setReview}
        multiline
      />
      <TouchableOpacity style={styles.submitBtn} onPress={submitReview}>
        <Text style={styles.submitText}>Submit Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 200 },
  name: { fontSize: 24, fontWeight: 'bold', padding: 16 },
  section: { fontSize: 18, padding: 16, backgroundColor: '#f8f8f8' },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1 },
  itemName: { fontSize: 16 },
  addBtn: { backgroundColor: '#22c55e', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  addText: { color: 'white', fontWeight: 'bold' },
  ratingRow: { flexDirection: 'row', padding: 16, gap: 8 },
  reviewInput: { borderWidth: 1, margin: 16, padding: 12, borderRadius: 8, height: 80 },
  submitBtn: { backgroundColor: '#f97316', margin: 16, padding: 14, borderRadius: 10, alignItems: 'center' },
  submitText: { color: 'white', fontWeight: 'bold' },
});
