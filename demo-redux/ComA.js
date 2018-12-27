import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ComB from './ComB';

export default class ComA extends React.Component {
    
    render() {
        return(
            <View style={{width: 200, height: 200, backgroundColor: 'red', justifyContent: "center", alignItems: "center"}}>
                <ComB ref="mrB" />
            </View>
        )
    }

    clickA() {
        this.refs.mrB.clickB()
    }
}