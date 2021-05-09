import 'react-native-gesture-handler';
import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import gS from './Styles';

function ResultsScreen({ route, navigation }) {
  const { numOfCorrectAnswers, totalQuestions } = route.params;
    return (
      <View style={gS.container}>
        <View style={gS.picContainer}>
          <Image style={gS.pic} source={require('../assets/pexels-baluc-photography-6598294.jpg')} />
          <Text style={gS.coment}>Source: pexels-baluc-photography-6598294</Text>
        </View>
        <View style={gS.child}>
          <View style={gS.childResult}>
            <Text style={gS.result}>You've done it!</Text>
            <Text style={gS.result}>You got {numOfCorrectAnswers} corect answers out of {totalQuestions} questions.</Text> 
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