import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ComC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mau: "blue"
        }
    }

    render() {
        return(
            <View style={{width: 100, height: 100, backgroundColor: this.state.mau}}></View>
        )
    }

    clickC() {
        this.setState({
            mau: "yellow"
        })
    }
}