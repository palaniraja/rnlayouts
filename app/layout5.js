/**
 * Based on http://stackoverflow.com/a/38185681/240255
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';


var {height, width} = Dimensions.get('window');


export default class Layout5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layout:{
        height:height,
        width:width,

      }
    };
  }


  _onLayout = event => {

    console.log('------------------------------------------------' + JSON.stringify(event.nativeEvent.layout));

    this.setState({
      layout:{
        height:event.nativeEvent.layout.height,
        width:event.nativeEvent.layout.width,

      }
    });
  }

  render() {
    console.log(JSON.stringify(this.props));
    var landscapeView =
                        <View style={{marginTop:20, flexDirection:'row'}}>
                          <Image source={{uri: 'https://facebook.github.io/react-native/img/react-native-congratulations.png'}} 
                          style={{height:this.state.layout.height-50, width:this.state.layout.width/2}}
                          />
                          <View>
                            <Text style={styles.text}> header this is landscape view </Text>
                            <Text style={styles.text}> footer this is portrait view  </Text>
                          </View>


                        </View>
    var portraitView = <View style={{marginTop:20}}>
                        <Text style={styles.text}> header this is landscape view </Text>
                          <Image source={{uri: 'https://facebook.github.io/react-native/img/react-native-congratulations.png'}} style={{height:200, width:this.state.layout.width}}/>
                          <Text style={styles.text}> footer this is portrait view  </Text>
                        </View>

    var cview =null;
    if (this.state.layout.height>this.state.layout.width) {
      cview = portraitView
    }else{
      cview = landscapeView;
    }
    return(
      <View style={styles.container}   onLayout={this._onLayout}>
      {cview}
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F7C59F',
  },
  
  text:{
    fontSize: 20,
    backgroundColor: '#EFEFD0',
    margin: 5,
  },

  

});


