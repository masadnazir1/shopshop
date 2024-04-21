// App.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Header from './components/Header';
import HomeScreen from './HomeScreen';
import ShopScreen from './ShopScreen';
import AccountScreen from './AccountScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen';
import SingleProductScreen from './components/SingleProductScreen'; // Import SingleProductScreen

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CustomHeaderTabNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const CustomHeaderTabNavigator = () => {
  return (
    <>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="TabScreens"
          component={TabScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SingleProduct"
          component={SingleProductScreen}
        
        />

<Stack.Screen name="Cart" component={CartScreen} />
<Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </>
  );
};

const TabScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./assets/home.png')}
              style={{ width: size, height: size, tintColor: focused ? color : '#aaa' }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Shop" 
        component={ShopScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./assets/cart.png')}
              style={{ width: size, height: size, tintColor: focused ? color : '#aaa' }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('./assets/user.png')}
              style={{ width: size, height: size, tintColor: focused ? color : '#aaa' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
