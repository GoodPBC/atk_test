// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/Button";

// Home Screen Component
const HomeScreen = props => {

 
return <View style={styles.alignView}>   
        {/* Navigate to directory */}
        <ButtonComponent title={'LISTINGS'} onPress={()=> props.navigation.navigate('List')} />

        {/* Navigate to Components */}
        <ButtonComponent title={'COMPONENTS'} onPress={()=> props.navigation.navigate('Components')} />
        
        {/* Navigate to Components */}
        <ButtonComponent title={'IMAGES'} onPress={()=> props.navigation.navigate('Images')} />
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
