import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { RadioButton, Text, Button } from 'react-native-paper';
import qst from './Database';
import gS from './Styles';

let corectAnswer = 0;


const Card = () => {
  const [value, setValue] = useState(' ');
  const [i, seti] = useState(0);

  return (
    <View style={gS.container}>
      <Image style={gS.pic} source={qst[i].pic} />
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
    <Button icon="check-circle" mode="contained" onPress={() =>{
        if (value===qst[i].ca) {corectAnswer++}
        (seti(i + 1))}
        }>
     Submit
    </Button>
    <Text style={gS.result}>You've got {corectAnswer} correct answers!</Text>
    </View>
  )};

export default Card;