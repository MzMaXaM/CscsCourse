import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RadioButton, Text, Button } from 'react-native-paper';
import qst from './Database'

const Card = () => {
  const [value, setValue] = useState(' ');
  const [i, seti] = useState(0);

  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={qst[i].pic} />
      <Text style={styles.question}>{qst[i].question}</Text>
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <TouchableOpacity onPress={() =>  setValue('a')}> 
            <View style={styles.radioContainer}>
                <RadioButton value="a" />
                <Text style={styles.radioText}>{qst[i].a}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  setValue('b')}>
            <View style={styles.radioContainer}>
                <RadioButton value="b" />
                <Text style={styles.radioText}>{qst[i].b}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  setValue('c')}> 
            <View style={styles.radioContainer}>
                <RadioButton value="c" />
                <Text style={styles.radioText}>{qst[i].c}</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>  setValue('d')}>
            <View style={styles.radioContainer}>
                <RadioButton value="d" />
                <Text style={styles.radioText}>{qst[i].d}</Text>
            </View>
        </TouchableOpacity>
        
    </RadioButton.Group>
    <Button icon="camera" mode="contained" onPress={() => seti(i + 1)}>
     Check Answer
    </Button>
    </View>
  )};

const styles = StyleSheet.create({
    container: {
      width: 400,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    questionsContainer: { },
    question: {
      marginTop: 15,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    pic: {
      height: 165,
      width: 185,
      borderRadius:5
    },
    coment:{
      marginVertical: 5,
      fontSize: 11,
      color: 'orange',
    },
    radioOption: {
      flexDirection: 'row'
    },
    buttonPlace: {
      marginTop: 10
    },
    radioContainer: {
      width: 400,
      flexDirection: 'row'
    },
    radioText:{
      marginVertical: 5,
      fontSize: 14
    }
  });

export default Card;