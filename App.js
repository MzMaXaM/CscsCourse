import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen'
import MockTest from './Components/MockTest'
import Results from './Components/ResultScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: 'false',
          headerTransparent: 'true'
        }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
         />
        <Stack.Screen 
          name="MockTest" 
          component={MockTest}
         />
        <Stack.Screen 
          name="Results" 
          component={Results}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;