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
 

    return (
        <View>
            <Text style={styles.headerText}>Color Picker Screen</Text>
            
            <ColorPicker color="Red" topTitle="+ Red" bottomTitle="- Red" 
                onPressTop={() => { setRedIntensity(redIntensity + 1) }}
                onPressBottom={() => { setRedIntensity(redIntensity - 1) }}
            />
            
            <ColorPicker color="Green" topTitle="+ Green" bottomTitle="- Green" 
                onPressTop={() => {setGreenIntensity(greenIntensity + 1) }}
                onPressBottom={() => {setGreenIntensity(greenIntensity - 1) }}
            />
            
            <ColorPicker color="Blue" topTitle="+ Blue" bottomTitle="- Blue" 
                onPressTop={() => {setBlueIntensity(blueIntensity + 1)}}
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