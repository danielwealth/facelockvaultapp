// mobile/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import BiometricUnlockScreen from './screens/BiometricUnlockScreen';
import ImageViewerScreen from './screens/ImageViewerScreen';
import MatchHistoryScreen from './screens/MatchHistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BiometricUnlock" component={BiometricUnlockScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="ImageViewer" component={ImageViewerScreen} />
        <Stack.Screen name="MatchHistory" component={MatchHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
