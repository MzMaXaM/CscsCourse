
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './homeScreen'
import mocka from './mockTest'

const screens = {
    Home: {
        screen: home
    },
    MockTest: {
        screen: mocka
    }
}

const StackNav = createStackNavigator(screens)

export default NavigationContainer (StackNav)