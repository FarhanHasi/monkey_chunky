import * as React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import db from './localDB';
import PhonixSound from './components/phonixSound';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      textType: "",
    
    chunks: [],
    phones: []
    }

  }
  render(){
    return (
       <View style={styles.container}>
          <Header backgroundColor={'green'}  
          centerComponent={{text:"Monkey_chunky", style: {color:"yellow",fontSize: 25}}}/>
          <View style={styles.appC}>
          <Image style={styles.imageStyle} source={require("./assets/monkey.png")}/>
           <TextInput style={styles.text} onChangeText={(text)=>{this.setState({textType: text})}}
           value={this.state.textType}></TextInput>
           <TouchableOpacity style={styles.button} onPress={()=>{
            word=this.state.textType.toLowerCase().trim()
            db[word]?(
            this.setState({chunks: db[word].chunks}),
            this.setState({phones: db[word].phones})
            ):
            Alert.alert("Word doesn't exist:");
           }}>
            <Text style={styles.textStyle}> Go </Text>
            </TouchableOpacity>
           <View style={{flexDirection: "row", alignItems: "center", justifyContent:"center", width:500,height:50, flexWrap:"wrap"}}>
              {this.state.chunks.map((item,index) =>{
              return(
                <PhonixSound wordChunk={item} soundChunk={this.state.phones[index]}></PhonixSound>
              )})}</View>
            </View>
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  appC: {
    flex: 1,
    width: "100%",

    backgroundColor: 'yellow',
  },
  text:{
    borderWidth: 4,
    width:"80%",
    marginTop: 50,
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    //borderWidth: 5,
    marginTop: 80,
    marginLeft: 20,
    borderRadius: 100,
    width:100,
    height:100,
    backgroundColor: "red",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
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
  },
  imageStyle: {
    width: 200,
    height:200,
    alignSelf: "center",
    marginTop: 100 
  } 

});
