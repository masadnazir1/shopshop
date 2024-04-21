// CartScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const { product } = route.params;

  // Function to handle navigation to checkout
  const handleCheckout = () => {
    navigation.navigate('Checkout', { product });
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {/* Add any other necessary cart fields */}
        <Button title="Checkout" onPress={handleCheckout} />
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
    width: 400,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
});

export default CartScreen;
