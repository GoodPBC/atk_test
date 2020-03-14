// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

// Button Component
const ButtonComponent = props => {

  return <View style={styles.wrapper}>
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  </View>
};


//style sheet
const styles = StyleSheet.create({
  wrapper: {
    alignContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: "helvetica",    
    fontWeight: "bold",


  },
  button: {
    borderColor: 'blue',
    borderWidth: 3,
    marginTop: 15,
    paddingHorizontal: '34.33%',
  },
});

//export
export default ButtonComponent;