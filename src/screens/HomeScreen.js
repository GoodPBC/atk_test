// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Button from "../components/Button"

// Home Screen Component
const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Home</Text>

    <Button />
    
    <Button />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: "helvetica",
    fontWeight: "bold",
    
  },
});


//export
export default HomeScreen;
