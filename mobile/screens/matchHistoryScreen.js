// mobile/screens/MatchHistoryScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import API from '../api';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function MatchHistoryScreen() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const token = await EncryptedStorage.getItem('token');
      const { data } = await API.get('/match-history', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {matches.map((match, i) => (
        <Text key={i}>{match.name} matched on {new Date(match.timestamp).toLocaleString()}</Text>
      ))}
    </View>
  );
}
