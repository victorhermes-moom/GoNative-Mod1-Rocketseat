import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

export default class todo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.gonative}>{this.props.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gonative: {
    color: "#000",
    fontSize: 50,
    textAlign: "center"
  }
});
