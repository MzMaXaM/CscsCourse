const questions = {
    0: {
        question: 'Which of these are not legal duty as a worker?',
        a: 'Not to interfere with anything provided for health and safety',
        b: 'To look after the health and safety of anyone else who might be affected by your work',
        c: 'To look after your own health and safety',
        d: 'To write your own risk assessments',
        ca: 'd',
        ba: ['a','c','b'],
        pic: require('../assets/pexels-anamul-rezwan-1216589.jpg')
    },
    1: {
        question: 'What does a risk assessment identify?',
        a: 'How to report accidents',
        b: 'The hazards and safe way of doing the job',
        c: 'The site working hours',
        d: 'Where the first-aid box is kept',
        ca: 'b',
        ba: ['a','c','d'],
        pic: require('../assets/pexels-anamul-rezwan-1216589.jpg')
    },
    2: {
        question: 'What does the word "Hazard" mean',
        a: 'A type of barrier or machine guard',
        b: 'Anything at work that could harm you',
        c: 'The likelihood that something might happen',
        d: 'The site accident rate',
        ca: 'b',
        ba: ['a','c','d'],
        pic: require('../assets/pexels-pixabay-159306.jpg')
    }
}

export default questions;