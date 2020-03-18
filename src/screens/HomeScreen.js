// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/Button";

// Home Screen Component
const HomeScreen = ({ navigation }) => {

 
return <View style={styles.alignView}> 

        <Text style={styles.text}>PICK A SECTION</Text>

        {/* Navigate to Components */}
        <ButtonComponent title={'HOME'} onPress={()=> navigation.navigate('Home')} />
        
        {/* Navigate to directory */}
        <ButtonComponent title={'PEOPLE'} onPress={()=> navigation.navigate('List')} />

        {/* Navigate to Images */}
        <ButtonComponent title={'IMAGES'} onPress={()=> navigation.navigate('Images')} />

        {/* Navigate to Color Game */}
        <ButtonComponent title={'COLOR GAME'} onPress={()=> navigation.navigate('Colors')} />

        {/* Navigate to Color Picker */}
        <ButtonComponent title={'COLOR PICKER'} onPress={()=> navigation.navigate('ColorPicker')} />

        {/* Navigate to Basic Style Screen */}
        <ButtonComponent title={'BASIC STYLE'} onPress={()=> navigation.navigate('BasicStyle')} />
        
      </View>
};

const styles = StyleSheet.create({
  text: {
    paddingTop: 30,
    color: 'blue',
    fontSize: 20,
    fontFamily: "helvetica",
    fontWeight: "bold",
  },
  alignView: {
    alignItems: "center",
  }
});


//export
export default HomeScreen;
