import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';



export default function Question() {
const [questions, setQuestions] = useState([
 {
    key:1,
    question: 'Which of these are not legal duty as a worker?',
    a: 'Not to interfere with anything provided for health and safety',
    b: 'To look after the health and safety of anyone else who might be affected by your work',
    c: 'To look after your own health and safety',
    d: 'To write your own risk assessments',
    ca: 'd',
    pic:   <Image style={styles.pic} source={require('../assets/pexels-anamul-rezwan-1216589.jpg')} />
 },
{
    key: 2,
    question: 'What does a risk assessment identify?',
    a: 'How to report accidents',
    b: 'The hazards and safe way of doing the job',
    c: 'The site working hours',
    d: 'Where the first-aid box is kept',
    ca: 'b',
    pic:   <Image style={styles.pic} source={require('../assets/pexels-anamul-rezwan-1216589.jpg')} />
}
]);
}