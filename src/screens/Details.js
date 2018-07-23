import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Details extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={ styles.container }>
                <Text>Test</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
});

export default Details;