import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";
import Post from "./components/Post";
import "./config/ReactotronConfig";
export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        author: "Victor Hermes",
        description: "Falando um pouco sobre mim",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        id: 1,
        author: "Monique Rodrigues",
        description: "Conhecendo o mundo",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        id: 2,
        author: "Monique Rodrigues",
        description: "Conhecendo o mundo",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
        id: 3,
        author: "Monique Rodrigues",
        description: "Conhecendo o mundo",
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNotes</Text>
        </View>

        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa07a"
  },
  header: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },
  headerTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  }
});
