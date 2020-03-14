// Import Dependencies
import React , {useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

// Color Screen Component
const ColorScreen = () => {
    //initial functional state 
    const [color, setColor] = useState([]);
    console.log(color);


    return (
        <View>
            {/* tile generator */}
            <Button title={"SURPRISE"} onPress={() => setColor([...color,randomColor()])}/>

            {/* colors flatlist */}
            <FlatList
                keyExtractor={(item) => {return item}}
                data={color} 
                renderItem={( {item} ) => {
                    console.log(item);
                    {/* Dynamic rgb gen */} 
                    return <View style={{height: 100, width: 100, backgroundColor: item }}/>
                }}
            />
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