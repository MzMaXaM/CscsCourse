import 'react-native-gesture-handler';
import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import gS from './Styles';

function ResultsScreen({ route, navigation }) {
  const { NumOfCorrectAnswers, totalQuestions } = route.params;
    return (
      <View style={gS.container}>
        <View style={gS.picContainer}>
          <Image style={gS.pic} source={require('../assets/pexels-baluc-photography-6598294.jpg')} />
          <Text style={gS.coment}>Source: pexels-baluc-photography-6598294</Text>
        </View>
        <View style={gS.child}>
          <View>
            <Text>You've done it!</Text>
            <Text>Youve got {JSON.stringify(NumOfCorrectAnswers)} corect answers out of {JSON.stringify(totalQuestions)} questions.</Text> 
          </View>
          <View>
            <Text style={gS.coment}>Push to go to home screen</Text>
            
            <View style={gS.buttonContainer}>
              <Button 
                icon="test-tube"
                mode="contained"
                onPress={() => navigation.navigate('HomeScreen', { name: 'HomeScreen' })}>
                  Home Screen
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
}
  
export default ResultsScreen;