/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text>Hello K-Lords!</Text>
        <Text>Hey Team you can hit Command D to bring up a menu</Text>
        <Text>Also you can use Command R to reload</Text>
        <Text>Turn on live reload</Text>
        <Text>open chrome to localhost:8081/debugger-ui for debugging</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);
