import  {creatAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack' 

import SignIn from './src/screens/SignIn'
import SignIn from './src/screens/SignUp'

const appNavigator = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    headerNode: "none"
  }
)

export default creatAppContainer(appNavigator);