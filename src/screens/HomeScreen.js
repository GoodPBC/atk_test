// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/Button";

// Home Screen Component
const HomeScreen = props => {
  console.log(props.navigation.navigate('List'))
 
return <View style={styles.alignView}>   
        {/* Navigate to directory */}
        <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate('List')}>
          <Text> LISTINGS </Text>
        </TouchableOpacity>
        {/* Navigate to Components */}
        <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate('Components')}>
          <Text>DIRECTORY</Text>
        </TouchableOpacity>
        <ButtonComponent onPress={()=>{}}></ButtonComponent>
      </View>
};

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
export default HomeScreen;
