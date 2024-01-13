import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    });
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Emblem_ACVI_Schneider.png')}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>CORPORATION™</Text>
      <Text style={styles.description}>THE SUBSIDIARY OF THE ARQUEBUS CORPORATION</Text>
      {isLoading ? (
        <ProgressBar indeterminate color="white" width={200} height={10} />
      ) : null}
      <Text style={styles.descriptionProduct}>======PRODUCT======</Text>
      <Image
        source={require('./assets/33_-_WUERGER-66E.png')}
        style={styles.image}
      />
      <Text style={styles.descriptionProduct}>WUERGER/66E | ARM UNIT</Text>
      <Image
        source={require('./assets/PFAU-66D.png')}
        style={styles.image}
      />
      <Text style={styles.descriptionProduct}>PFAU/66D | ARM UNIT</Text>
      <Text style={styles.description}>SATRIO | XII RPL 5 | 12</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#180000',
    alignItems: 'center',
    padding: 8,
  },
  profilePicture: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: 270,
    height: 150,
    marginVertical: 10,
    borderWidth: 2, // Add border width
    borderColor: 'white', // Add border color
  },
  descriptionProduct: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});