import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class UserBar extends Component {
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
                <Text>USER BAR</Text>
            </View>
        );
    }
}
