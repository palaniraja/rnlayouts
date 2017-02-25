
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button
} from 'react-native';


var {height, width} = Dimensions.get('window');


export default class Layout6 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layout:{
        height:height,
        width:width,

      }
    };
  }

  onButtonPress(){
    console.log('hello');
  }



  render() {
     // <Image source={{uri: 'https://facebook.github.io/react-native/img/react-native-congratulations.png'}} 
              //             style={styles.image} 
              //             />
    
    return(
            <View style={styles.container}>
              <View style={[styles.arrows]}>
                  <View style={styles.nav}>
                  <Button title="◀" onPress={this.onButtonPress} />
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image 
                    source={{uri: 'https://facebook.github.io/react-native/img/react-native-congratulations.png'}} 
                    style={styles.image} 
                />
                
              </View>
              <View style={[styles.arrows]}>
                <View style={styles.nav}>
                  <Button title="▶" onPress={this.onButtonPress} />
                </View>
              </View>
            </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
  },
  
  arrows:{
    zIndex: 2,
    width: 100
  },

  imageContainer:{
    backgroundColor: 'green',
    marginLeft: -100,
    marginRight: -100,
    zIndex: 1,
    flex:1,
    
  },

  nav:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },

  image:{
    flex:1,
  }



});


