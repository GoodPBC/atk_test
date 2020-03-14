//Dependency 
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorPicker from '../components/ColorPicker'

// ColorPickerScreen Component
const ColorPickerScreen = () => {
    return (
        <View>
            <Text>Color Picker Screen</Text>
            <ColorPicker/>
        </View>
    )
}

//style sheet
const styles = StyleSheet.create({})

//export
export default ColorPickerScreen