import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BasicStyle from '../components/BasicStyle'


const BasicStyleScreen = () => {
    return (
        <View style={styles.alignView}>
            <Text style={styles.text}>STYLE SCREEN</Text>
            <BasicStyle/>
            <BasicStyle/>
            <BasicStyle/>
        </View>
    )
}


const styles = StyleSheet.create({
    
    alignView: {
        alignItems: 'center',
        marginVertical: 30,

    },
    text: {
        color: 'blue',
        fontSize: 20,
        fontFamily: "helvetica",
        fontWeight: "bold",
    },    
})

export default BasicStyleScreen