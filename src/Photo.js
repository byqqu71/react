import React, { Component } from 'react';
import  { Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Photo extends Component {
    static propTypes = {
        style: PropTypes.oneOfType(
            [
                PropTypes.array,
                PropTypes.number,
                PropTypes.shape({}),
            ]
        ).isRequired
    };
    render() {
        const { style } = this.props;
        return (
            <View style = { style }>
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

const styles = StyleSheet.create(
    {
        image: {
            height: '100%',
            width: '100%'
        }
    }
);