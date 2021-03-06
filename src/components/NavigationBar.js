import React, { Component } from 'react';
import  { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class NavigationBar extends Component {
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
                <Text>Navigation</Text>
            </View>
        );
    }
}