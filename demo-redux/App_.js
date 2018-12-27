import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import ComA from './ComA';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.refs.mrA.clickA()
          }} 
        >
          <Text>Click me</Text>
        </TouchableOpacity>
        <ComA ref="mrA" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
