//Dependency 
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorPicker from '../components/ColorPicker'

// ColorPickerScreen Component
const ColorPickerScreen = props => {
    return (
        <View>
            <Text style={styles.headerText}>Color Picker Screen</Text>
            <ColorPicker titleText="Red Scale" topTitle="+ Red" bottomTitle="- Red" onPressTop={() => {console.log('RED ++')}} onPressBottom={() => {console.log('RED --')}} />
            <ColorPicker titleText="Green Scale" topTitle="+ Green" bottomTitle="- Green" onPressTop={() => {console.log('Green ++')}} onPressBottom={() => {console.log('Green --')}} />
            <ColorPicker titleText="Blue Scale" topTitle="+ Blue" bottomTitle="- Blue" onPressTop={() => {console.log('Blue ++')}} onPressBottom={() => {console.log('Blue --')}} />
        </View>
    )
}

//style sheet
const styles = StyleSheet.create({
    headerText: {
        alignSelf: 'center',
    }
})

//export
export default ColorPickerScreen