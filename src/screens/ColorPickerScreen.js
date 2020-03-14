//Dependency 
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorPicker from '../components/ColorPicker'

// ColorPickerScreen Component
const ColorPickerScreen = () => {

    //initial functional state 
    const [redIntensity, setRedIntensity] = useState(0)
    const [greenIntensity, setGreenIntensity] = useState(0)
    const [blueIntensity, setBlueIntensity] = useState(0)

    //logs
    console.log(`RED INTENSITY: ${redIntensity}`)
    console.log(`GREEN INTENSITY: ${greenIntensity}`)
    console.log(`BLUE INTENSITY: ${blueIntensity}`)
 
    // colorPickers for RBG
    return (
        <View>
            <Text style={styles.headerText}>Color Picker Screen</Text>
            {/* Red colorPicker */}
            <ColorPicker color="Red" topTitle="+ Red" bottomTitle="- Red" 
                // onPressTop incrementing/controlling R state
                onPressTop={() => { setRedIntensity(redIntensity + 1) }}
                // onPressTop decrementing/controlling R state
                onPressBottom={() => { setRedIntensity(redIntensity - 1) }}
            />
            
            <ColorPicker color="Green" topTitle="+ Green" bottomTitle="- Green" 
                // onPressTop incrementing/controlling G state
                onPressTop={() => {setGreenIntensity(greenIntensity + 1) }}
                // onPressTop decrementing/controlling G state
                onPressBottom={() => {setGreenIntensity(greenIntensity - 1) }}
            />
            
            <ColorPicker color="Blue" topTitle="+ Blue" bottomTitle="- Blue" 
                // onPressTop incrementing/controlling B state
                onPressTop={() => {setBlueIntensity(blueIntensity + 1)}}
                // onPressTop decrementing/controlling B state
                onPressBottom={() => {setBlueIntensity(blueIntensity - 1) }}
            />

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