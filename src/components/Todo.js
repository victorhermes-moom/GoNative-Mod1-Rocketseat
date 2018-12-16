import React, { Component } from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export default class todo extends Component {
  static defaultProps = {
    texto: "Todo padrão!"
  };

  static propTypes = {
    texto: propTypes.string.isRequired
  };
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
    textAlign: "center"
  }
});
