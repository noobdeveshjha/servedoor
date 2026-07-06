## Installation & Setup for Servedoor

### 1. Mobile App (React Native + Expo)
```bash
git clone https://github.com/noobdeveshjha/servedoor.git
cd servedoor
npm install

# Install additional packages for full features
npm install react-native-maps expo-location @react-navigation/native-stack
npm install react-native-safe-area-context react-native-screens

npx expo start
```

### 2. Backend
```bash
cd backend
npm install
node server.js
```

### 3. To Test Full Flow
1. Start backend on port 5000
2. Run Expo app
3. Login with any phone + OTP 1234
4. Add items to cart
5. Go to Payment
6. Use MapTracking screen
7. Check RestaurantOwner and Admin screens (you can navigate manually for demo)

**For Real Map & Payment:**
- Get Google Maps API key
- Get Razorpay keys and integrate in PaymentScreen

Everything is ready for demo!