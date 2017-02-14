/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Layout2 extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.navbar}><Text style={styles.text}>Title</Text></View>
        <View style={styles.content}><Text style={styles.text}>Content View</Text></View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginTop: 20
  },
  
  text:{
    fontSize: 20,
    color: 'white',
  },

  navbar:{
    height:44,
    backgroundColor: '#5F634F'
  },

  content:{
    flex:1,
    backgroundColor: '#9BC4CB'
  }

});


