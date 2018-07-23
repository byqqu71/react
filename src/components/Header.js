import React, { Component } from 'react';
import  { TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends Component {
    static propTypes = {
        style: PropTypes.oneOfType(
            [
                PropTypes.array,
                PropTypes.number,
                PropTypes.shape({}),
            ]
        ).isRequired
    };
    showDetails = () => {
        this.props.navigator.push({
            screen: 'app.Details',
        });
    };
    render() {
        const { style } = this.props;
        return (
            <TouchableHighlight style = { style } onPress = { this.showDetails }>
                <Text>Header</Text>
            </TouchableHighlight>
        );
    }
}