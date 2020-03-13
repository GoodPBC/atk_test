// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

// Home Screen Component
const ButtonComponent = () => {
  return <View>
    <Text style={styles.text}>Home</Text>

    <TouchableOpacity style={styles.button} onPress={()=> console.log('Navigate to Directory Page')}>
      <Text>Directory</Text>
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
    borderWidth: 3
  },
});

//export
export default ButtonComponent;