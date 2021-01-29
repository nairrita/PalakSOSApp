import * as React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <ScrollView>
            <View style = {{alignItems:'center', justifyContent:'center', flex:1}}>
                <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.navigate('SOS')}}>
                <Text style = {styles.buttonText}>SOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.navigate('Defense')}}>
                <Text style = {styles.buttonText}>Defense</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.navigate('Laws')}}>
                <Text style = {styles.buttonText}>Laws</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.navigate('Ratings')}}>
                <Text style = {styles.buttonText}>Ratings</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.navigate('Escape')}}>
                <Text style = {styles.buttonText}>Escape</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button} onPress={()=>{this.props.navigation.navigate('Safety')}}>
                <Text style = {styles.buttonText}>Safety</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'blue',
        width:100,
        height:50,
        marginVertical:50,
        borderRadius:10,
        alignContent:'center'
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})