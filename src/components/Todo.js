import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

export default class todo extends Component {
  static defaultProps = {
    texto: "Todo padrão!"
  };

  static PropTypes = {
    texto: PropTypes.string.isRequired
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
