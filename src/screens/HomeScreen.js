// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/Button";

// Home Screen Component
const HomeScreen = ({ navigation }) => {

 
return <View style={styles.alignView}>   
        {/* Navigate to Components */}
        <ButtonComponent title={'HOME'} onPress={()=> navigation.navigate('Components')} />
        
        {/* Navigate to directory */}
        <ButtonComponent title={'PEOPLE'} onPress={()=> navigation.navigate('List')} />

        {/* Navigate to Images */}
        <ButtonComponent title={'IMAGES'} onPress={()=> navigation.navigate('Images')} />

        {/* Navigate to Color Game */}
        <ButtonComponent title={'COLOR GAME'} onPress={()=> navigation.navigate('Colors')} />
        
      </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: "helvetica",
    fontWeight: "bold",
  },
  alignView: {
    // alignItems: "center",
    maxWidth: 500,
  }
});


//export
export default HomeScreen;
