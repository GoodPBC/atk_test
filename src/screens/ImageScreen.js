//Dependencies
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageCard from '../components/ImageCard';

//Image Screen Component
const ImageScreen = () => {
    return (
        <View style={styles.wrapper}>
            <ImageCard style={styles.image} title="Image One" likes="11" imageURL={require('../assets/photo1.jpg')}/>
            <ImageCard title="Image Two" likes="5" imageURL={require('../assets/photo2.jpg')} />
            <ImageCard title="Image Three" likes="8" imageURL={require('../assets/photo3.jpg')}/>
        </View>
    )
}

//StyleSheet
const styles = StyleSheet.create({
    //screen style
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    //image styles
    image: {

    },
});

// Export
export default ImageScreen;
