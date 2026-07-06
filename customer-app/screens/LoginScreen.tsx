import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone');

  const sendOTP = () => {
    if (phone.length === 10) {
      Alert.alert('OTP Sent', 'Check your phone (Demo: 1234)');
      setStep('otp');
    }
  };

  const verifyOTP = () => {
    if (otp === '1234') {
      navigation.replace('Main');
    } else {
      Alert.alert('Wrong OTP', 'Demo OTP is 1234');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Servedoor</Text>
      {step === 'phone' ? (
        <>
          <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" value={phone} onChangeText={setPhone} maxLength={10} />
          <TouchableOpacity style={styles.button} onPress={sendOTP}><Text style={styles.btnText}>Send OTP</Text></TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput style={styles.input} placeholder="Enter OTP (1234)" keyboardType="number-pad" value={otp} onChangeText={setOtp} maxLength={4} />
          <TouchableOpacity style={styles.button} onPress={verifyOTP}><Text style={styles.btnText}>Verify & Login</Text></TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', padding: 20 }, title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 }, input: { borderWidth: 1, padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 18 }, button: { backgroundColor: '#f97316', padding: 15, borderRadius: 10, alignItems: 'center' }, btnText: { color: 'white', fontSize: 18, fontWeight: 'bold' } });
