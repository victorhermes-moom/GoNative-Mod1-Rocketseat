import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const Post = ({ data }) => (
  <View style={styles.post}>
    <Text style={styles.author}>{data.author}</Text>
    <Text style={styles.description}>{data.description}</Text>
    <Text style={styles.content}>{data.content}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string
  }).isRequired
};

const styles = StyleSheet.create({
  author: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold"
  },
  description: {
    fontSize: 15,
    color: "#6b6b6b",
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: 1
  },
  post: {
    backgroundColor: "#F5FCFF",
    padding: 20,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 15
  },
  content: {
    color: "#6b6b6b"
  }
});

export default Post;
