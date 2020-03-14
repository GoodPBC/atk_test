// Import Dependencies
import React from 'react'
import { Image, Text, StyleSheet,  View } from 'react-native'
import LoveCounter from '../components/Counter'

// custom image component w/ props
const ImageCard = props => {    

    return <View style={styles.wrapper}>
                <Image style={styles.image} source={props.imageURL}/>
                <Text style={styles.text}>{props.title + ' || Likes: ' + props.likes}</Text>
                <LoveCounter />
           </View>
};

// stylesheet
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        paddingVertical: '4%',
        width: '75%',
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        borderColor: '#f55',
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'blue',
    }    
});

//Export
export default ImageCard;

