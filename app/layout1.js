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

export default class Layout1 extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.text}>Blank View</Text>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9BC4CB',
  },
  text:{
    fontSize: 20,
    color: 'white'
  }
});


