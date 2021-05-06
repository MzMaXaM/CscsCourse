import {StyleSheet } from 'react-native';

const globalStyleSheet = StyleSheet.create({
    container: {
      height: '95%',
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
    },
    child:{
      height: '45%',
      width: '95%',
      marginTop: '5%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    picContainer:{
      height: '50%',
      width: '95%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,

      elevation: 8,
    },
    pic: {
      height: '100%',
      width: '100%',
      borderRadius: 5,
    },
    question: {
      marginTop: 10,
      fontSize: 14,
      fontWeight: 'bold',
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
    }
  });

  export default globalStyleSheet;