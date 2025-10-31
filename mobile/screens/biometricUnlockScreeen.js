// mobile/screens/BiometricUnlockScreen.js
import React from 'react';
import { View, Button, Alert } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

export default function BiometricUnlockScreen({ navigation }) {
  const handleUnlock = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const { success } = await rnBiometrics.simplePrompt({ promptMessage: 'Unlock Vault' });
    if (success) {
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Biometric failed');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Unlock with Biometrics" onPress={handleUnlock} />
    </View>
  );
}
