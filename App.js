// In App.js in a new project

import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen'
import MockTest from './Components/MockTest'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Construction Scheme Mock Test" component={HomeScreen} />
        <Stack.Screen name="Test on..." component={MockTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;