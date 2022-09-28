import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

export default class PhonixSound extends React.Component{
playSound=async(soundChunk)=>{
    url="https://s3-whitehatjrcontent.whjr.online/phones/"+soundChunk+".mp3"
    console.log(url);
   await Audio.Sound.createAsync({
    uri:url
   },{
    shouldPlay:true
   })
}
    render(){
        return(
            <TouchableOpacity style={styles.buttonC} onPress={()=>{this.playSound(this.props.soundChunk)}}>
                <Text style={styles.textC}>{this.props.wordChunk}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

    buttonC: {
        marginTop: 50,
        marginLeft:20,
        borderRedius: 100,
        width:50,
        height:50,
        backgroundColor: "green",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
      },
      textC: {
        fontSize: 20,
        fontWeight: 'bold',
      }
})
