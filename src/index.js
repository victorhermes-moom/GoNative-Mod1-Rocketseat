import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import Todo from "./components/Todo";
export default class App extends Component {
  state = {
    todos: [
      { id: 0, conteudo: "Primeiro post" },
      { id: 1, conteudo: "Segundo post" },
      { id: 2, conteudo: "GoNative da Rocket" }
    ]
  };

  addPost = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), conteudo: "Esse é o novo amigo!" }
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo texto="Fazer um bom café!" />
        {this.state.todos.map(todos => (
          <Todo key={todos.id} texto={todos.conteudo} />
        ))}
        <Button title="Adicionar" onPress={this.addPost} />
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
  }
});
