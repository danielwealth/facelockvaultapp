// mobile/screens/LoginScreen.js
import EncryptedStorage from 'react-native-encrypted-storage';
import ReactNativeBiometrics from 'react-native-biometrics';
import API from '../api';

async function login(email, password) {
  const { data } = await API.post('/login', { email, password });
  await EncryptedStorage.setItem('token', data.token);
}

const token = await EncryptedStorage.getItem('token');
const resp = await API.get('/unlocked-images', {
  headers: { Authorization: `Bearer ${token}` },
});



async function biometricUnlock() {
  const rnBiometrics = new ReactNativeBiometrics();
  const { success } = await rnBiometrics.simplePrompt({ promptMessage: 'Unlock FaceLock Vault' });
  if (success) {
    // Proceed to fetch images
    <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />

  }
}
