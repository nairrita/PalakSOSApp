import * as React from 'react';
import {View,Text,StyleSheet,ImageBackground,Image,ScrollView,SafeAreaProvider,TouchableOpacity} from 'react-native';
import {Video} from 'expo-av';
import {AppLoading} from 'expo'

export default class Defense extends React.Component{
    constructor(props){
        super(props);
        this.state = { loading: true };
    }
    async componentDidMount(){
        this.setState({ loading: false });
    }
    
  render(){
    if(this.state.loading){
        return (
          <AppLoading/>
        )
    }
    return(
      <View>
          
          <ImageBackground source ={require('../assets/bg.png')} style = {styles.image}>
              <ScrollView>

<Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 5, marginBottom: 5}} source ={require('../assets/selfdefense.png')} />

<Image style={styles.reasonImage} source ={require('../assets/defense-reasons.png')} />

<Video
                            source={(require('../assets/DefenseVideos/Video3.mp4'))}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Escape with hands trapped</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video2.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Escape from side headlock</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video3.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Groin Kick</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video4.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Heel palm strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video5.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Elbow strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video6.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Hammer strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video7.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Alternative elbow strike</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video8.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Hammer strike while swinging</Text>

                        <Video
                            source={require('../assets/DefenseVideos/Video9.mp4')}
                            rate={1.0}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                        <Text style={styles.text}>Escape from a 'bear hug attack'</Text>
                        <TouchableOpacity onPress = {()=>{this.props.navigation.navigate("SOS")}}>
                            <Text>BACK</Text>
                        </TouchableOpacity>       

              </ScrollView>

          </ImageBackground>

          

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    image:{
        resizeMode: "cover",
        height: "100%"
    },
    reasonImage: {
        width: 350,
        height: 300,
        alignSelf: 'center',
        marginBottom: 40
    },
    video: {
        marginHorizontal: 80,
        width:200,
        height:170
    },
    text: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 15,
        color: '#681fa2',
        marginBottom: 28
    }
})