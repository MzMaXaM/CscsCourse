const questions = {
    0: {
        question: 'Which of these are not legal duty as a worker?',
        a: 'Not to interfere with anything provided for health and safety',
        b: 'To look after the health and safety of anyone else who might be affected by your work',
        c: 'To look after your own health and safety',
        d: 'To write your own risk assessments',
        ca: 'd',
        ba: ['a','c','b'],
        pic: require('../assets/pexels-anamul-rezwan-1216589.jpg'),
        picSource: 'pexels-anamul-rezwan-1216589'
    },
    1: {
        question: 'What does a risk assessment identify?',
        a: 'How to report accidents',
        b: 'The hazards and safe way of doing the job',
        c: 'The site working hours',
        d: 'Where the first-aid box is kept',
        ca: 'b',
        ba: ['a','c','d'],
        pic: require('../assets/pexels-anamul-rezwan-1216589.jpg'),
        picSource: 'pexels-anamul-rezwan-1216589'
    },
    2: {
        question: 'What does the word "Hazard" mean',
        a: 'A type of barrier or machine guard',
        b: 'Anything at work that could harm you',
        c: 'The likelihood that something might happen',
        d: 'The site accident rate',
        ca: 'b',
        ba: ['a','c','d'],
        pic: require('../assets/pexels-pixabay-159306.jpg'),
        picSource: 'pexels-pixabay-159306'
    },
    3: {
        question: 'What is the main objective of carrying out an accident investigation?',
        a: 'To find out the causes in orer to prevent it happening again',
        b: 'To find out the cost of any damage that occured',
        c: 'To find out who is at fault',
        d: 'To record what injuries were sustained',
        ca: 'a',
        ba: ['b','c','d'],
        pic: require('../assets/pexels-cottonbro-4553277.jpg'),
        picSource: 'pexels-cottonbro-4553277'
    },
    4: {
        question: 'What should you do if you have witnessed a serious accident on your site?',
        a: 'Ask your workmates what they think you should do',
        b: 'Say nothing in case you get someone into trouble',
        c: 'Telephone the local hospital',
        d: 'Tell your supervisor that you saw what happened',
        ca: 'd',
        ba: ['a','c','b'],
        pic: require('../assets/pexels-cottonbro-4553277.jpg'),
        picSource: 'pexels-cottonbro-4553277'
    },
    5: {
        question: 'If someone burns their hand, what is the best thing you can do?',
        a: 'Put the hand into cold water or under a cold running tap',
        b: 'Rub barrier cream or Vaseline into the burn',
        c: 'Tell them to carry on working to exercise the hand',
        d: 'Wrap your handkerchief around the burn',
        ca: 'a',
        ba: ['b','c','b'],
        pic: require('../assets/pexels-pixabay-280076.jpg'),
        picSource: 'pexels-pixabay-280076'
    },
    6: {
        question: 'When should you apply skin barrier cream?',
        a: 'As part of first-aid treatment',
        b: 'Before you start work',
        c: "When you can't find your gloves",
        d: 'When you finish work',
        ca: 'b',
        ba: ['a','c','b'],
        pic: require('../assets/pexels-alexandr-podvalny-319930.jpg'),
        picSource: 'pexels-alexandr-podvalny-319930'
    },
    7: {
        question: 'You need to use a grinder, cut-off saw, cartridge tool or nail gun. What type of eye protection will you need?',
        a: 'Impact-resistant goggles or full face shield',
        b: 'Light eye protection(safety glasses)',
        c: 'Reading glasses or sunglasses',
        d: 'Welding goggles',
        ca: 'a',
        ba: ['b','c','d'],
        pic: require('../assets/pexels-pixabay-159306.jpg'),
        picSource: 'pexels-pixabay-159306'
    },
    8: {
        question: 'What will safety footwear with a protective mid-sole protect you from?',
        a: 'Getting blisters in warm, wet contitions',
        b: 'Nails or sharp objects puncturing the sole of your foot if your stand on them',
        c: 'Spillages which may burn the sole of your foot',
        d: 'Twisting your ankle',
        ca: 'b',
        ba: ['a','c','d'],
        pic: require('../assets/pexels-pixabay-159306.jpg'),
        picSource: 'pexels-pixabay-159306'
    },
    9: {
        question: 'How should you wear your helmet to get maximum protection?',
        a: 'A)',
        b: 'B)',
        c: 'C)',
        d: 'D)',
        ca: 'd',
        ba: ['a','c','b'],
        pic: require('../assets/Pixabay-KelseyVere-987188.jpg'),
        picSource: 'Kelsey Vere from Pixabay'
    },
    10: {
        question: 'Do you have to pay for any personal protective equipment(PPE)?',
        a: 'No, your employer must pay for it',
        b: 'Only if you need to replace lost or damaged PPE',
        c: 'Yes, but you only have to pay half of the cost',
        d: 'Yes, you must pay for all of it',
        ca: 'a',
        ba: ['b','c','d'],
        pic: require('../assets/pexels-anamul-rezwan-1216544.jpg'),
        picSource: 'pexels-anamul-rezwan-1216544'
    },
    11: {
        question: 'Which of these statements about personal protective equipment (PPE) IS NOT TRUE?',
        a: 'You must pay for any damage or loss',
        b: 'You must report any damage or loss to your supervisor',
        c: 'You must store it corectly when you are not using it',
        d: 'You must use it as instructed',
        ca: 'a',
        ba: ['b','c','d'],
        pic: require('../assets/pexels-anamul-rezwan-1216544.jpg'),
        picSource: 'pexels-anamul-rezwan-1216544'
    },
    12: {
        question: 'If you use a power tool to cut or grind materials, why must the dust be collected and not allowed to get into the air?',
        a: 'The tool will go faster if the dust is colected',
        b: 'Most dust can be harmful if breathed in',
        c: 'To save time and to avoid having to clean up the mess',
        d: 'You do not need a machine guard if the dust is collected',
        ca: 'b',
        ba: ['a','c','d'],
        pic: require('../assets/pexels-anamul-rezwan-1216544.jpg'),
        picSource: 'pexels-anamul-rezwan-1216544'
    },
    13: {
        question: 'What can cause occupational asthma?',
        a: 'Breathing in hazarduous dust, fumes or vapours',
        b: 'Exposure to loud noise',
        c: 'Exposure to rat urine',
        d: 'Skin contact with any hazarduous substance',
        ca: 'a',
        ba: ['d','c','b'],
        pic: require('../assets/pexels-anamul-rezwan-1216544.jpg'),
        picSource: 'pexels-anamul-rezwan-1216544'
    },
    14: {
        question: 'What should you do if you find pigeon droppings and nests in an area where you are required to work?',
        a: "Carry on with your work carefully, so you don't disturb them",
        b: 'Stop work and seek advice',
        c: 'Try to catch the pigeons',
        d: 'Wait for the pigeons to fly away before carrying on with your work',
        ca: 'b',
        ba: ['a','c','d'],
        pic: require('../assets/pexels-joshua-köller-757182.jpg'),
        picSource: 'pexels-joshua-köller-757182'
    },
    15: {
        question: 'You have been using a vibrating tool. The ends of your fingers are starting to tingle. What does this mean?',
        a: 'You can carry on using the tool but you must hold it tighter',
        b: 'You can carry on using the tool but you must loosen your grip',
        c: 'You must not use this tool, or any other vibrating toolever again',
        d: 'You need to report the simptoms before the can cause a problem',
        ca: 'd',
        ba: ['a','c','b'],
        pic: require('../assets/pexels-tima-miroshnichenko-6474194.jpg'),
        picSource: 'pexels-tima-miroshnichenko-6474194'
    },
    16: {
        question: 'If you need to use a vibrating tool even for a short time, how can you help reduce the risk of hand-arm vibration?',
        a: 'Do not grip the tool too tightly',
        b: 'Hold the tool away from you, at arms length',
        c: 'Hold the tool more tightly',
        d: 'Use more force',
        ca: 'a',
        ba: ['d','c','b'],
        pic: require('../assets/pexels-tima-miroshnichenko-6474194.jpg'),
        picSource: 'pexels-tima-miroshnichenko-6474194'
    },
    17: {
        question: 'If you need to use a vibrating tool, how can you help reduce the effects of hand-arm vibration?',
        a: 'Do the work in one long burst',
        b: 'Do the work in short spells',
        c: 'Hold the tool tightly',
        d: 'Only use one hand at a time on the tool',
        ca: 'b',
        ba: ['a','c','b'],
        pic: require('../assets/pexels-tima-miroshnichenko-6474194.jpg'),
        picSource: 'pexels-tima-miroshnichenko-6474194'
    },
    18: {
        question: 'How can be asbestos correctly identified?',
        a: 'By getting a sample analysed in a lab',
        b: 'By putting a piece in water and seeing if it dissolves',
        c: 'By the colour of the dust',
        d: 'The dust gives a strong smell',
        ca: 'a',
        ba: ['d','c','b'],
        pic: require('../assets/pexels-life-of-pix-8159.jpg'),
        picSource: 'pexels-life-of-pix-8159'
    },
    19: {
        question: 'You need to use a hazarduous substance. Who should explain the health risks and safe method of work you need to follow (the COSHH assessment) before you start?',
        a: 'An Health and SafetyExecutive (HSE) inspector',
        b: 'The site first aider',
        c: 'The site security people',
        d: 'Your supervisor or employer',
        ca: 'd',
        ba: ['a','c','b'],
        pic: require('../assets/pexels-life-of-pix-8159.jpg'),
        picSource: 'pexels-life-of-pix-8159'
    },
    20: {
        question: 'Which of the following is a manual handling task?',
        a: 'Activities involving pushing, pulling, lowering and lifting',
        b: 'Climbing ladders or stairs',
        c: 'Getting in and out of a vehicle used at work',
        d: 'Lifting materials with a crane',
        ca: 'a',
        ba: ['d','c','b'],
        pic: require('../assets/pexels-yury-kim-585419.jpg'),
        picSource: 'pexels-yury-kim-585419'
    },
    21: {
        question: 'What should you do if you have to carry a load down a steep slope?',
        a: 'Carry the load on your shoulder',
        b: 'Put the load down and let gravity move it down the slope',
        c: 'Assess whether you can still carry the load safely',
        d: 'Walk backwards down the slope to help you balance',
        ca: 'c',
        ba: ['d','a','b'],
        pic: require('../assets/pexels-yury-kim-585419.jpg'),
        picSource: 'pexels-yury-kim-585419'
    },
    22: {
        question: 'Your job requires you to move the same sized load several times a minute from one place to another. Could this be a problem?',
        a: "No, it won't need a risk assessment if the load is light",
        b: 'Not if the load is below the recommended weight for lifting',
        c: 'Only if, as work progresses, the load cannot be moved as often as required',
        d: 'Yes, as repetition introduces additional strain to the body',
        ca: 'd',
        ba: ['c','a','b'],
        pic: require('../assets/pexels-yury-kim-585419.jpg'),
        picSource: 'pexels-yury-kim-585419'
    },
    23: {
        question: 'Which of the following is the best method to help minimise the risk of injury when manual handling?',
        a: 'Asking a trained person to carry the load',
        b: 'Making the area of site flatter before performing the task',
        c: 'Not having any heavy objects on site',
        d: 'Safely using lifting aids',
        ca: 'd',
        ba: ['c','a','b'],
        pic: require('../assets/pexels-yury-kim-585419.jpg'),
        picSource: 'pexels-yury-kim-585419'
    }
}

export default questions;