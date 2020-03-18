// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

// Button Component
const ButtonComponent = ({onPress, title}) => {

  return <View style={styles.wrapper}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
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
    alignSelf: 'center',


  },
  button: {
    borderColor: 'blue',
    borderWidth: 3,
    marginTop: 25,
    paddingVertical: 10,
    width: 200,
    backgroundColor: 'rgba(237,73,86,.5)',
  },
});

//export
export default ButtonComponent;