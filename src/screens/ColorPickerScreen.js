//Dependency 
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorPicker from '../components/ColorPicker'


const COLOR_CHANGE = 15;

// ColorPickerScreen Component
const ColorPickerScreen = () => {

    //initial functional state 
    const [red, setRedIntensity] = useState(0)
    const [green, setGreenIntensity] = useState(0)
    const [blue, setBlueIntensity] = useState(0)

    // logs
    console.log(red)
    console.log(green)
    console.log(blue)

    
    //rgb
    let color = `${red},${green},${blue}`;

    //color value control function 
    const colorValueController = (colorVal, ColorValChange) => {
        switch(colorVal) {
            case 'Red':
                if (red + ColorValChange <= -1 || red + ColorValChange >= 256) {
                    console.log("RED CASE HIT: " , red);
                    return;
                } else {
                    setRedIntensity(red + ColorValChange);
                }
                return;
            case 'Green':
                if (green + ColorValChange <= -1 ||green + ColorValChange >= 256) {
                    console.log("GREEN CASE HIT: " , green);
                    return;
                } else {
                    setGreenIntensity(green + ColorValChange);
                }
                return;                
            case 'Blue':
                if (blue + ColorValChange <= -1 || blue + ColorValChange >= 256) {
                    console.log("BLUE CASE HIT: " , blue);
                    return;
                } else {
                    setBlueIntensity(blue + ColorValChange);
                }
                return;
            }
    }

    // colorPickers for RBG
    return (
        <View>
            <Text style={styles.headerText}>Color Picker Screen</Text>
            {/* Red colorPicker */}
            <ColorPicker color="Red" topTitle="+ Red" bottomTitle="- Red"
                // onPressTop incrementing/controlling R state
                onPressTop={() => { colorValueController('Red', COLOR_CHANGE) }}
                // onPressTop decrementing/controlling R state
                onPressBottom={() => { colorValueController('Red', -1 * COLOR_CHANGE) }}
            />
            
            <ColorPicker color="Green" topTitle="+ Green" bottomTitle="- Green"
                // onPressTop incrementing/controlling G state
                onPressTop={() => { colorValueController('Green', COLOR_CHANGE) }}
                // onPressTop decrementing/controlling G state
                onPressBottom={() => { colorValueController('Green', -1 * COLOR_CHANGE) }}
            />
            
            <ColorPicker color="Blue" topTitle="+ Blue" bottomTitle="- Blue" 
                // onPressTop incrementing/controlling B state
                onPressTop={() => { colorValueController('Blue', COLOR_CHANGE) }}
                // onPressTop decrementing/controlling B state
                onPressBottom={() => { colorValueController('Blue', -1 * COLOR_CHANGE) }}
            />
            <View style={{ minHeight: 200, minWidth: 200, backgroundColor: `rgb(${color})`}}></View>
            

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