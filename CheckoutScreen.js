// CheckoutScreen.js
import React from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native';

const CheckoutScreen = ({ route }) => {
  const { product } = route.params;

  // Function to handle order submission
  const handleSubmitOrder = () => {
    // Implement logic to submit order
    alert('Order submitted successfully!');
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {/* Checkout form */}
        <TextInput style={styles.input} placeholder="Enter your name" />
        <TextInput style={styles.input} placeholder="Enter your address" />
        <TextInput style={styles.input} placeholder="Enter your email" />
        <Button title="Submit Order" onPress={handleSubmitOrder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  detailsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default CheckoutScreen;
