// mobile/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import API from '../api';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data } = await API.post('/login', { email, password });
    await EncryptedStorage.setItem('token', data.token);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Use Biometrics" onPress={() => navigation.navigate('BiometricUnlock')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 10, borderBottomWidth: 1, padding: 8 },
});
