import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';


import SafetyTipsScreen from './screens/SafetyTips';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import EscapeScreen from './screens/Escape';
import LawsScreen from './screens/Laws';
import RatingsScreen from './screens/Ratings';
import Defense from './screens/SelfDefence'
import HomeScreen from './screens/HomeScreen';
import SOSscreen from './screens/SOS';
import Chat from './screens/Chat';
import Message from './screens/MessageScreen'



export default class App extends React.Component{
  render(){
    return(
      
        
        <AppContainer/>
     
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Home:HomeScreen,
  Message:Message,
  SOS:SOSscreen,
  ChatBot:Chat,
  Escape: EscapeScreen,
   Laws: LawsScreen,
  Ratings: RatingsScreen,
   SafetyTips:SafetyTipsScreen,
   Defense: Defense

})
const AppContainer = createAppContainer(SwitchNavigator)