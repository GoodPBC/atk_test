import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const BasicStyle = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Styling Example</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    viewStyle: {
        marginVertical: 15,
        height: 100,


    },
    text: {
        color: 'black',
        fontSize: 14,
        fontFamily: "helvetica",
        fontWeight: "bold",
        borderColor: 'blue',
        borderWidth: 3,
        backgroundColor: 'rgba(237,73,86,.5)',
        padding: 20,
      },
})

export default BasicStyle