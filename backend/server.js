const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Fake Database
let orders = [];
let restaurants = [
  { id: 1, name: 'Pizza Palace', location: 'Patna' },
  { id: 2, name: 'Biryani House', location: 'Patna' }
];

// API Routes
app.get('/api/restaurants', (req, res) => res.json(restaurants));

app.post('/api/order', (req, res) => {
  const order = { id: Date.now(), ...req.body, status: 'placed' };
  orders.push(order);
  io.emit('newOrder', order); // Real-time to restaurant/admin
  res.json({ success: true, order });
});

app.get('/api/orders', (req, res) => res.json(orders));

// Socket for live tracking
io.on('connection', (socket) => {
  console.log('User connected for tracking');
  socket.on('updateLocation', (data) => {
    io.emit('locationUpdate', data);
  });
});

server.listen(5000, () => console.log('Backend running on port 5000'));
