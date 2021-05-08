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
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{ title: 'CsCs Mock Test' }}
         />
        <Stack.Screen 
          name="MockTest" 
          component={MockTest}
          options={{ title: 'Mock Test Screen' }}
         />
        <Stack.Screen 
          name="Results" 
          component={Results}
          options={{ title: 'Results Screen' }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;