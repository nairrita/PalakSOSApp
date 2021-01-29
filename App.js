import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Ratings from './screens/Ratings'
import SafetyTipsScreen from './screens/SafetyTips';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import EscapeScreen from './screens/Escape';
import LawsScreen from './screens/Laws';
import RatingsScreen from './screens/Ratings';
import Defense from './screens/SelfDefence'
import HomeScreen from './screens/HomeScreen';
import SOS from './screens/SOS';



export default class App extends React.Component{
  render(){
    return(
      
        
        <AppContainer/>
     
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Home:HomeScreen,
  SOS:SOS,
  Escape: EscapeScreen,
   Laws: LawsScreen,
  Ratings: RatingsScreen,
   SafetyTips:SafetyTipsScreen,
   Defense: Defense

})
const AppContainer = createAppContainer(SwitchNavigator)