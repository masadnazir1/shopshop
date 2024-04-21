// Header.js
import React from 'react';
import { View, TextInput, StyleSheet,Image } from 'react-native';


const Header = () => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />
     

     <Image
     style={styles.cart}
        source={require('../assets/cart.png')}
        
      />


    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },

  cart: {
    width: 40,
    height: 40
  },
});

export default Header;
