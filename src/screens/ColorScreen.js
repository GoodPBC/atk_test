// Import Dependencies
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

// Color Screen Component
const ColorScreen = () => {
    return (
        <View>
            <Button title={"SURPRISE"} onPress={() => {randomColor()}}/>
            {/* Dynamic rgb gen */}
            <View style={{height: 100, width: 100, backgroundColor: randomColor()}}/>
        </View>
    )
}

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let rgb = (`${r},${g},${b}`);
    console.log(rgb);

    return `rgb(${rgb})`;
}
//style sheet
const styles = StyleSheet.create({ 

})
//export
export default ColorScreen