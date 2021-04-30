import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Database from './Database'


export default function Question() {
  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={require('../assets/pexels-anamul-rezwan-1216589.jpg')} />
      <Text style={styles.paragraph}>      </Text>
      <Text style={styles.coment}>
       Choose one answer
      </Text>

            <input type="radio" value="no" name="option" />
            
            <input type="radio" value="yes" name="option" />
            
            <input type="radio" value="no" name="option" />
            
            <input type="radio" value="no" name="option" />
            
        <Button className="sBtn"
          style={styles.button}
          title="Submit"
          />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      marginTop: 20,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    pic: {
      height: 165,
      width: 165,
    },
    coment:{
      fontSize: 11,
      color: 'orange',
    }
  });