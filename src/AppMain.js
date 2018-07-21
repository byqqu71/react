import React, { Component  } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from "./Header";
import UserBar from './UserBar'
import Photo from "./Photo";
import Description from "./Description";
import NavigationBar from "./NavigationBar";
import PropTypes from 'prop-types';

export default class AppMain extends Component {
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
            <View style={ style }>
                <Header style={ styles.header }/>
                <UserBar style={ styles.userBar }/>
                <Photo style={ styles.photo }/>
                <Description style={ styles.description }/>
                <NavigationBar style={ styles.navigationBar }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%'
    },
    userBar: {
        width: '100%',
        height: '10%'
    },
    photo: {
        flex: 1
    },
    description: {
        width: '100%',
        height: '15%'
    },
    navigationBar: {
        width: '100%',
        height: '10%'
    }
});