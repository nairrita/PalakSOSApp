import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';




export default class RatingsScreen extends React.Component {

    
    render(){
        return(
            <View>
                
                
                <ImageBackground source={require('../assets/bg.png')} style={styles.image}>

                    <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 10}} source ={require('../assets/ratings.png')} />

                    <WebView 
                        source={{
                            // uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdYn8wTpOgyqxn1NzBtnESr_FlAS3fSksgzSx8wMpxmr2gaXg/viewform?usp=sf_link'
                            uri: 'https://docs.google.com/forms/d/11avcA9FwVHLtfzA8gbDN79qXFw8OBc6pbFpDJ8y2w1U/edit'
                        }}
                        style={{                           
                            marginLeft: 10,
                            marginRight: 10,
                            marginBottom: 20,                      
                        }}
                    />

                </ImageBackground>

                <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("Home")}}>
                            <Text>BACK</Text>
                        </TouchableOpacity>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    }
});