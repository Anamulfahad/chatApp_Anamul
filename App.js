import  {creatAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack' 

import SignIn from './scr/screens/SignIn'
import chat from './scr/screens/chat'

const appNavigator = createStackNavigator(
  {
    SignIn: SignIn,
    chat: chat
  },
  {
    headerNode: "none"
  }
)

export default creatAppContainer(appNavigator);