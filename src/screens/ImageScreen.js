//Dependencies
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageCard from '../components/ImageCard';
//Image Screen FC
const ImageScreen = () => {
    return (
        <View>
            <ImageCard title="Image One" />
            <ImageCard title="Image Two" />
            <ImageCard title="Image Three" />
        </View>
    )
}
//StyleSheet
const styles = StyleSheet.create({});

// Export
export default ImageScreen;
