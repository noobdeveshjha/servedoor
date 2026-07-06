const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurants');
const orderRoutes = require('./routes/orders');
const walletRoutes = require('./routes/wallet');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/servedoor')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/wallet', walletRoutes);

// Socket.io for real-time
io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('updateLocation', (data) => {
    io.emit('locationUpdate', data);
  });
  socket.on('orderStatusUpdate', (data) => {
    io.emit('orderStatus', data);
  });
});

// Seed sample data (run once)
app.get('/api/seed', async (req, res) => {
  // Add sample restaurants if needed
  res.json({ message: 'Seed endpoint ready' });
});

server.listen(process.env.PORT || 5000, () => {
  console.log('Servedoor Backend running on port', process.env.PORT || 5000);
});