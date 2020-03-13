// Import Dependencies
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import ButtonComponent from "../components/Button";

// Home Screen Component
const HomeScreen = ({ navigation }) => {

 
return <View style={styles.alignView}>   
        {/* Navigate to Components */}
        <ButtonComponent title={'COMPONENT SCREEN'} onPress={()=> navigation.navigate('Components')} />
        
        {/* Navigate to directory */}
        <ButtonComponent title={'LISTING SCREEN'} onPress={()=> navigation.navigate('List')} />

        {/* Navigate to Components */}
        <ButtonComponent title={'IMAGE SCREEN'} onPress={()=> navigation.navigate('Images')} />
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
