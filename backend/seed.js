const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');

mongoose.connect('mongodb://localhost:27017/servedoor').then(async () => {
  await Restaurant.deleteMany({});
  await Restaurant.insertMany([
    {
      name: 'Pizza Palace',
      cuisine: 'Italian',
      type: 'Non-Veg',
      rating: 4.5,
      deliveryTime: '25 min',
      location: 'Patna',
      image: 'https://picsum.photos/200',
      menu: [
        { id: 101, name: 'Margherita Pizza', price: 249, desc: 'Classic cheese pizza', type: 'Veg' },
        { id: 102, name: 'Chicken Biryani', price: 299, desc: 'Spicy chicken biryani', type: 'Non-Veg' }
      ],
      isOpen: true
    },
    {
      name: 'Biryani House',
      cuisine: 'Indian',
      type: 'Both',
      rating: 4.3,
      deliveryTime: '30 min',
      location: 'Gaya',
      image: 'https://picsum.photos/201',
      menu: [
        { id: 201, name: 'Veg Biryani', price: 199, desc: 'Aromatic veg biryani', type: 'Veg' }
      ],
      isOpen: true
    }
  ]);
  console.log('Sample data seeded!');
  process.exit();
});