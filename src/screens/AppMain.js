import React, { Component  } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from "../components/Header";
import UserBar from '../components/UserBar'
import Photo from "../components/Photo";
import Description from "../components/Description";
import NavigationBar from "../components/NavigationBar";

export default class AppMain extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={ styles.container }>
                <Header navigator={this.props.navigator} style={ styles.header }/>
                <UserBar style={ styles.userBar }/>
                <Photo style={ styles.photo }/>
                <Description style={ styles.description }/>
                <NavigationBar style={ styles.navigationBar }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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