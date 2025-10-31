// api.js
import axios from 'axios';
import ReactNativeBiometrics from 'react-native-biometrics';
import EncryptedStorage from 'react-native-encrypted-storage';

const API = axios.create({
  baseURL: 'https://your-backend.onrender.com',
});



async function login(email, password) {
  const { data } = await API.post('/login', { email, password });
  await EncryptedStorage.setItem('token', data.token);
}


async function biometricUnlock() {
  const rnBiometrics = new ReactNativeBiometrics();
  const { success } = await rnBiometrics.simplePrompt({ promptMessage: 'Unlock FaceLock Vault' });
  if (success) {
    // Fetch unlocked images
  }
}
<Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />



export default API;
