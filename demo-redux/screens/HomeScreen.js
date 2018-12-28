import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import Controller from './Controller';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

  render() {
    return (
      <View style={styleApp.container}>
          <View style={styleApp.header}>
              <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
              <Text style={styleApp.value}>0</Text>
          </View>

          <Controller />
      </View>
    );
  }
}

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});

