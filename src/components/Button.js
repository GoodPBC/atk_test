// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

// Home Screen Component
const ButtonComponent = () => {
  return <View style={styles.alignView}>
    <TouchableOpacity style={styles.button} onPress={()=> console.log('Navigate to Directory Page')}>
      <Text>BUTTON</Text>
    </TouchableOpacity>
  </View>
};


//style sheet
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: "helvetica",
    fontWeight: "bold",
  },
  button: {
    borderColor: 'blue',
    borderWidth: 3,
    marginTop: 15,
    paddingHorizontal: 50,
  },
  alignView: {
    alignItems: "center",
    maxWidth: "200%",
  }
});

//export
export default ButtonComponent;