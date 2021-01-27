import * as React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Header,Icon} from 'react-native-elements'

export default class AppHeader extends React.Compoent{
    render(){
        return(
            <Header 
                    backgroundImage={require("../assets/bgofheader.png")}
                    backgroundImageStyle={{resizeMode:'cover', height:87}}
                    containerStyle={{height:90 }}
                    //leftComponent={<Icon name="bars" type="font-awesome" size={29} color="white" onPress={() => this.props.navigation.toggleDrawer()}/>}
                    placement="center"
                    backgroundColor = {'#681fa2'}
                    rightComponent={<Image
                        style={styles.tinyLogo}
                        source={require('../assets/header-icon.png')}
                    />}
                    />
        )
    }
}
const styles = StyleSheet.create({
    tinyLogo: {
      width: 45,
      height: 45,
    }
});