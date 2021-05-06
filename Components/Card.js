import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Button } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import qst from './Database';
import gS from './Styles';

const nOfQst = 2;

const Card = ({ navigation }) => {
    const [value, setValue] = useState('a');
    const [i, seti] = useState(0);
    const [corectAnswer, setcorectAnswer] = useState(0);

    const handler = () => {
        navigation.navigate('Results')
    }
    
  return (
    <View style={gS.container}>
        <View style={gS.picContainer}><Image style={gS.pic} source={qst[i].pic} />
            <Text style={gS.coment}>Source: {qst[i].picSource}</Text>
        </View>
        <View style={gS.child}>
            <Text style={gS.question}>{qst[i].question}</Text>
            <Text style={gS.coment}>Choose one answer</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <TouchableOpacity onPress={() =>  setValue('a')}> 
                    <View style={gS.radioContainer}>
                        <RadioButton value="a" />
                        <Text style={gS.radioText}>{qst[i].a}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>  setValue('b')}>
                    <View style={gS.radioContainer}>
                        <RadioButton value="b" />
                        <Text style={gS.radioText}>{qst[i].b}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>  setValue('c')}> 
                    <View style={gS.radioContainer}>
                        <RadioButton value="c" />
                        <Text style={gS.radioText}>{qst[i].c}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>  setValue('d')}>
                    <View style={gS.radioContainer}>
                        <RadioButton value="d" />
                        <Text style={gS.radioText}>{qst[i].d}</Text>
                    </View>
                </TouchableOpacity>
            </RadioButton.Group>
      {/* <Button title={"Submit"} onPress={onPress} /> */}
      <Button
          title="Submit"
          onPress={() =>{
              if (i === (nOfQst-1)) {
                  handler()}
              if (value===qst[i].ca) {setcorectAnswer(corectAnswer + 1)};
                seti(i + 1);
          }}
        />
            {/* <Button icon="check-circle" mode="contained" onPress={onPress} >
            Submit
            </Button> */}
            <Text style={gS.coment}>You've got {corectAnswer} correct answers!</Text>
        </View>
    </View>
  )};

export default Card;