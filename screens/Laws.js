import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';



export default class LawsScreen extends React.Component {

    //Defining states in constructor
    constructor() {
        super();
        this.state = {
         speechText : "The Indian Penal Code, 1860, lays down the provisions to penalise the culprit for the offences against women. Various sections under IPC specifically deals with such crimes:  • Acid Attack (Section 326A and 326B)  • Rape (Sections 375, 376, 376A, 376B, 376C, 376D and 376E)  • Kidnapping and abduction for different purposes (Sections 363-373)  • Murder, Dowry death, Abetment of Suicide, etc.(Sections 302, 304B and 306)  • Cruelty by husband or his relatives (Section 498A)  • Outraging the modesty of women (Section 354)  • Sexual harassment (Section 354A)  • Assault on women with intent to disrobe a woman (Section 354B)  • Voyeurism (Section 354C)  • Stalking (Section 354D)  • Word, gesture or act intended to insult the modesty of a woman (Section 509). "
        };
    }

    //Text to Speech function
    onSpeak = ()=>{
        Speech.speak(this.state.speechText,{
        language : 'en',
        pitch : 1,
        rate : 1
        })
    }

    onStop = ()=>{
        Speech.stop();
    }

    
    render() {
        return (
 
            <View>

                

                <ImageBackground source={require('../assets/bg.png')} style={styles.image}>

                    <ScrollView contentContainerStyle={{height: 1100}}>

                        <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 5}} source ={require('../assets/laws.png')} />

                        <Image style={styles.lawsImage} source ={require('../assets/women-ipc-laws2.png')} />

                        <View style={styles.speechContainer}>
                        <TouchableOpacity
                        onPress={this.onSpeak}>
                        <Image
                            style={{ width: 100, height: 60, marginRight: 10 }}
                            source={require('../assets/text_to_speech.png')}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={this.onStop}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../assets/stop.png')}
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("SOS")}}>
                            <Text>BACK</Text>
                        </TouchableOpacity>
                        </View>

                    </ScrollView>
                    
                </ImageBackground> 

            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        height: "100%"
    },
    lawsImage: {
        width: 360,
        height: 650,
        alignSelf: 'center',
        marginBottom: 40
    },
    speechContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 50,
    }
});