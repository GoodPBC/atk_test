// Import Dependencies
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Home Screen Component
const ComponentsScreen = () => {
    const header = 'Header';
    const title = 'this is title text';
    
    return (
        <View>
            <Text style={styles.header}>{header}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
//style sheet
const styles = StyleSheet.create({
    header: {
      fontSize: 50
    },
    title: {
        fontSize: 30
      },
          
  });

//export
export default ComponentsScreen
