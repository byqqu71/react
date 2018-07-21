import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UserBar from './UserBar.js'

export default class InstaClone extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <UserBar style={styles.userBar}/>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://lh3.googleusercontent.com/nEjXAbBPh4rMrFc5QDSIhR5TU6VfLB1Cj1H5M_2O8NJvgG0hoJyq0yirNBl2J5qHvLmuFHqa9mqI-aqYU7USCwUGALQ=s1024"
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    userBar: {
        width: '100%',
        height: '10%',
        backgroundColor: 'blue'
    },
    image: {
        width: '100%',
        height: '90%'
    },
});