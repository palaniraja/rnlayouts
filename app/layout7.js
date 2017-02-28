
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';




export default class Layout7 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      margin: -60
    };
  }

  onButtonPress(){
    
    var currentMargin = this.state.margin;
    console.log('currentMargin: '+ currentMargin);

    currentMargin -= 10;
    if(currentMargin <= -120){
      currentMargin = -60;
    }

    this.setState({'margin': currentMargin});
  }



  render() {


    // gclef 44x70 - https://drive.google.com/uc?export=download&id=0B5zYBfDUlKaWMWI4YVVyb3JFVUE
    // e 20x70 - https://drive.google.com/uc?export=download&id=0B5zYBfDUlKaWZ3hkLVVVTWtRWVk

      var gClef = 'https://drive.google.com/uc?export=download&id=0B5zYBfDUlKaWcDZFSHBURXQ0Mms';
      var note = 'https://drive.google.com/uc?export=download&id=0B5zYBfDUlKaWZ3hkLVVVTWtRWVk';
      
    return(

            <View style={styles.container}>
              <View style={styles.imageBox}>
                  <Image source={{uri: gClef}} 
                      style={styles.gclef} 
                      />
              </View>
              <View style={styles.imageBox}>
                    <Image source={{uri: note}} 
                      style={[styles.note, {marginTop:this.state.margin}]} 
                      />
              </View>
              <View>
                <Button title="Next" onPress={this.onButtonPress.bind(this)} />
              </View>
            </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    backgroundColor: "white",
    alignItems:"center",
    justifyContent:"center",

  },

  imageBox:{
    height: 70,
    width:65,
    alignItems: 'flex-end',
  },
  
  gclef:{
    zIndex: 1,
    width: 65,
    height:70,
    backgroundColor: 'red',
  },

  note:{
    zIndex: 2,
    width: 20,
    height: 70,
    backgroundColor: 'blue',
    opacity: 1,
    
  },

 



});


