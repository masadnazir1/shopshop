// ShopScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { products } from './services/data';
import ProductItem from './components/ProductItem';



const ShopScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productRow}>
            <ProductItem product={item} />
            <ProductItem product={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },
  listContent: {
    alignItems: 'center',
  },
});

export default ShopScreen;
