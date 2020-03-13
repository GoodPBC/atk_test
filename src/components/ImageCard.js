import React from 'react'
import { Image, Text, StyleSheet,  View } from 'react-native'

const ImageCard = props => {

    return (
        <View>
            <Image source={{uri: 'https://raw.githubusercontent.com/StephenGrider/rn-casts/029-images/assets/beach.jpg'}}/>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageCard;

