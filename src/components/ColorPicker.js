//Dependency 
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



// ColorPicker Component
const ColorPicker = ({ color, onPressTop, onPressBottom }) => {

    return  <View style={styles.wrapper}>
              
              <Text>{color} Scale</Text>
              
              <TouchableOpacity style={styles.button} onPress={() => {onPressTop()}}>
                  <Text style={styles.text}>+ {`${color}`}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.button} onPress={() => {onPressBottom()}}>
                  <Text style={styles.text}>- {`${color}`}</Text>
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

