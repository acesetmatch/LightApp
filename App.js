/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    isOn: false
  };

  turnOn = () => {
    NativeModules.Bulb.turnOn();
    this.updateStatus();
  };

  turnOff = () => {
    NativeModules.Bulb.turnOff();
    this.updateStatus();
  };

  updateStatus = () => {
    NativeModules.Bulb.getStatus((error, isOn) => {
      this.setState({ isOn: isOn });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Light App!!</Text>
        <Text> Bulb is {this.state.isOn ? "ON" : "OFF"}</Text>
        {!this.state.isOn ? (
          <Button onPress={this.turnOn} title="Turn ON " color="#FF6347" />
        ) : (
          <Button onPress={this.turnOff} title="Turn OFF " color="#FF6347" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
