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

export default class Layout3 extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.navbar}><Text style={styles.text}>Title</Text></View>
        <View style={styles.content}><Text style={styles.text}>Content View</Text></View>
        <View style={styles.tabbar}>
           <View style={[styles.tab, styles.tabOdd]}><Text style={styles.tabText}>1</Text></View>
           <View style={[styles.tab, styles.tabEven]}><Text style={styles.tabText}>2</Text></View>
           <View style={[styles.tab, styles.tabOdd]}><Text style={styles.tabText}>3</Text></View>
           <View style={[styles.tab, styles.tabEven]}><Text style={styles.tabText}>4</Text></View>
        </View>
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

  tabText:{
    fontSize: 14,
    color: '#688B58',
    padding:5,
  },

  navbar:{
    height:44,
    backgroundColor: '#5F634F'
  },
  tabbar:{
    height:44,
    backgroundColor: '#5F634F',
    flexDirection: 'row',
  },

  tab:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabOdd:{
    backgroundColor:'#AFE3C0',
  },

  tabEven:{
    backgroundColor:'#90C290',
  },

  content:{
    flex:1,
    backgroundColor: '#9BC4CB',
  }

});


