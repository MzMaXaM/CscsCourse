import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import gS from './Styles';

function HomeScreen({ navigation }) {
  const [number, setNumber] = useState(5);
    return (
      <View style={gS.container}>
        <View style={gS.picContainer}>
          <Image style={gS.pic} source={require('../assets/pexels-skitterphoto-38070.jpg')} />
          <Text style={gS.coment}>Source: pexels-skitterphoto-38070</Text>
        </View>
        <View style={gS.child}>
          <View>
            <Text>While we are in working process</Text>
            <Text>the Database contain only 23 questions</Text>
            <Text>Choose a number from 1 to 23 please </Text>
            <TextInput
              style={gS.input}
              onChangeText={number => setNumber(number)}
              defaultValue={number}
              keyboardType="numeric"
              maxLength={2}
              placeholder='5'
            />
          </View>
          <View>
            <Text style={gS.coment}>Push to start</Text>
            <View style={gS.buttonContainer}>
              <Button 
                icon="test-tube"
                mode="contained"
                onPress={() =>{
                  navigation.navigate('MockTest', {
                    numberOfQuestions: number
                })}}>
                Start Test
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
export default HomeScreen;