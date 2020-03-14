//Dependency 
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



// ColorPicker Component
const ColorPicker = ({ titleText, onPressTop, onPressBottom, bottomTitle, topTitle }) => {
    return <View style={styles.wrapper}>
        <Text>{titleText}</Text>
        <TouchableOpacity style={styles.button} onPress={onPressTop}>
            <Text style={styles.text}>{topTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressBottom}>
            <Text style={styles.text}>{bottomTitle}</Text>
        </TouchableOpacity>
  </View>
};


//style sheet
const styles = StyleSheet.create({
  wrapper: {
    alignContent: 'center',
    marginHorizontal: 100,
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontFamily: "helvetica",    
    fontWeight: "bold",


  },
  button: {
    borderColor: 'blue',
    borderWidth: 3,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

//export
export default ColorPicker

