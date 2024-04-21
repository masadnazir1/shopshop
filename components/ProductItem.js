// ProductItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductItem = ({ product }) => {
  const navigation = useNavigation();

  const handleProductPress = () => {
    navigation.navigate('SingleProduct', { product });
  };

  return (
    <TouchableOpacity onPress={handleProductPress}>
      <View style={styles.container}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#C9E3E9'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
});

export default ProductItem;
