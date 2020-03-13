// Import Dependencies
import React from "react";
import { Text, StyleSheet } from "react-native";

// Home Screen Component
const HomeScreen = () => {
  return <Text style={styles.text}>HomeScreen Test #1</Text>;
};


//style sheet
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

//export
export default HomeScreen;
