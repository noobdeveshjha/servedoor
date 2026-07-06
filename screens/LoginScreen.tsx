import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone'); // phone or otp

  const sendOTP = () => {
    if (phone.length === 10) {
      Alert.alert('OTP Sent', '1234 (demo)');
      setStep('otp');
    } else {
      Alert.alert('Error', 'Enter valid 10 digit number');
    }
  };

  const verifyOTP = () => {
    if (otp === '1234') {
      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Wrong OTP. Demo: 1234');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Servedoor</Text>
      
      {step === 'phone' ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />
          <TouchableOpacity style={styles.button} onPress={sendOTP}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP (1234)"
            keyboardType="number-pad"
            maxLength={4}
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity style={styles.button} onPress={verifyOTP}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 18 },
  button: { backgroundColor: '#f97316', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
