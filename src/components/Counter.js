import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonComponent from '../components/Button'

const LoveCounter = props => {


    // set loveCounter w/ Hook
    const [loveCounter, setLoveCounter] = useState(0);
    
    //handle loveCounter
    const addCountHandler = () => { setLoveCounter(loveCounter +1)} // ++;
    const removeCountHandler = () => { if(loveCounter === 0){ return; } setLoveCounter(loveCounter - 1)};// > 0 --;

    return (
        <View>
            <Text style={styles.text}>Loves: {loveCounter}</Text>
            {/* LIKE BUTTON  */}
            <ButtonComponent title="LOVES" onPress={()=> addCountHandler()}/>
            {/* Dislike Button */}
            <ButtonComponent title="LEAVES" onPress={()=> removeCountHandler()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: "helvetica",
        fontWeight: "bold",
      },
})

export default LoveCounter
