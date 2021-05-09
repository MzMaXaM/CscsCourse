import {StyleSheet } from 'react-native';

const globalStyleSheet = StyleSheet.create({
    container: {
      height: '90%',
      width: '90%',
      left: '5%',
      top: '6%',
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 5,
      elevation: 8,
    },
    child:{
      height: '45%',
      width: '95%',
      marginTop: '5%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    picContainer:{
      height: '50%',
      width: '95%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 5,
      elevation: 8,
    },
    pic: {
      height: '100%',
      width: '100%',
      borderRadius: 5,
    },
    question: {
      width: '90%',
      marginTop: 10,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    childResult:{
      width: '100%',
      alignItems: 'center',
    },
    result: {
      width: '100%',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      color: 'indigo'
    },
    coment:{
      fontSize: 10,
      color: 'orange',
    },
    radioContainer: {
      flexDirection: 'row',
    },
    radioText:{
      marginVertical: 5,
      fontSize: 13,
      flexShrink: 1,
      width: '93%'
    },
    input:{
      borderStyle: 'solid' ,
      borderWidth: 2,
      borderRadius: 5,
      textAlign: 'center'
    },
    buttonContainer:{
      shadowColor: "#000",
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 5,
      elevation: 8,
    }
  });

  export default globalStyleSheet;