import {StyleSheet } from 'react-native';

const globalStyleSheet = StyleSheet.create({
    container: {
      width: 400,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    question: {
      marginTop: 10,
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
      marginTop:10,
      fontSize: 11,
      color: 'orange',
    },
    result:{
      marginTop:10,
      fontSize: 11,
      color: 'turquoise',
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

  export default globalStyleSheet;