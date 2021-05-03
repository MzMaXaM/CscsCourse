import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import gS from './Styles';



function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={gS.coment}>Push to start</Text>
        <Button icon="test-tube" mode="contained" onPress={() => navigation.navigate('Test')}>
          Start Test
        </Button>
      </View>
    );
  }

  
export default HomeScreen;
