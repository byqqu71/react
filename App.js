import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import AppMain from "./src/AppMain";

export default class App extends Component {
  render() {
    return (
        <AppMain style={ styles.mainView }/>
    );
  }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});