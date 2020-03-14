// Import Dependencies
import React , {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

// Color Screen Component
const ColorScreen = () => {

    const [color, setColor] = useState([]);
    console.log(color);


    return (
        <View>
            <Button title={"SURPRISE"} onPress={() => setColor([...color,randomColor()])}/>
            {/* Dynamic rgb gen */}
            <View style={{height: 100, width: 100, backgroundColor: randomColor()}}/>
        </View>
    )
}


const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

//style sheet
const styles = StyleSheet.create({ 

})
//export
export default ColorScreen