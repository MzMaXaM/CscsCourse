import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import Card from './Card';

function MockTest({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card/>
      </View>
    );
  }

  
export default MockTest;
