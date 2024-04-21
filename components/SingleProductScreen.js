// SingleProductScreen.js
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SingleProductScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    // Navigate to the cart page with the product details
    navigation.navigate('Cart', { product });
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.ratingContainer}>
          {/* Rating component */}
          <Text>Rating: {product.rating}/5</Text>
          {/* Review component */}
          <Text>Reviews: {product.reviews}</Text>
        </View>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
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
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#A5CDD6',
    borderRadius: 5,
    color: '#000',
    fontSize: 18,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: '#A5CDD6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addToCartButtonText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SingleProductScreen;
