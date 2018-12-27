import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ComC from './ComC';

export default class ComB extends React.Component {
    render() {
        return(
            <View style={{width: 150, height: 150, backgroundColor: 'green', justifyContent: "center", alignItems: "center"}}>
                <ComC ref="mrC" />
            </View>
        )
    }

    clickB() {
        this.refs.mrC.clickC()
    }
}