// mobile/screens/DashboardScreen.js
import React from 'react';
import { View, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Button title="View Unlocked Images" onPress={() => navigation.navigate('ImageViewer')} />
      <Button title="Match History" onPress={() => navigation.navigate('MatchHistory')} />
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
