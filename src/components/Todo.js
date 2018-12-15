import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const Todo = ({ texto }) => (
  <View>
    <Text style={styles.gonative}>{texto}</Text>
  </View>
);

Todo.defaultProps = {
  texto: "Todo padrão!"
};

Todo.propTypes = {
  texto: propTypes.string.isRequired
};

const styles = StyleSheet.create({
  gonative: {
    color: "#000",
    textAlign: "center"
  }
});

export default Todo;
