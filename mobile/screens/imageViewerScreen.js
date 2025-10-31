// mobile/screens/ImageViewerScreen.js
import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import API from '../api';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function ImageViewerScreen() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const token = await EncryptedStorage.getItem('token');
      const { data } = await API.get('/unlocked-images', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      {images.map((url, i) => (
        <Image key={i} source={{ uri: url }} style={{ width: '100%', height: 200, marginBottom: 10 }} />
      ))}
    </ScrollView>
  );
}
