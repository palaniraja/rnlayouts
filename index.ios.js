

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Layout from './app/layout1'



export default class rnlayouts extends Component {
  
  render() {
    return (
      <Layout />
    );
  }
}



AppRegistry.registerComponent('rnlayouts', () => rnlayouts);