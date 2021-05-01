import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import questions from './Database'

const qst = questions
let rsp = []

const Card = () => {
const [i, seti] = useState(0);

  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={qst[i].pic} />
      <Text style={styles.question}>{qst[i].question}</Text>
      <Text style={styles.coment}>Choose one answer</Text>
      {/* <View style={styles.questionsContainer}>
        <TouchableOpacity onPress={() => this.handleChange} >
          <View style={styles.radioOption}>
            <input type="radio"  name="option" />
            <Text>{qst[i].a} </Text>
          </View></TouchableOpacity>  
        <TouchableOpacity>
          <View style={styles.radioOption}>
            <input type="radio" value="yes" name="option" />
            <Text>{qst[i].b} </Text>
          </View></TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.radioOption}>
            <input type="radio"  name="option" />
            <Text>{qst[i].c} </Text>
          </View></TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.radioOption}>
            <input type="radio"  name="option" />
            <Text>{qst[i].d} </Text>
          </View></TouchableOpacity>
      </View> */}
      <View style={styles.buttonPlace}>
      <Button 
        style={styles.button}
        title="Submit"
        onPress={() => (seti(i + 1),
        rsp.push(1)
        )}/>
      </View>
      <View style={styles.logBox}>
        <Text>clicked {i} times </Text>
      </View>
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
    }
  });

export default Card;