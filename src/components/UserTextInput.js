// Import Dependencies
import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

// Text Input Component
const UserTextInput = props => {
    
    return (
        <View>
            <Text>Text Input Component</Text>
            <TextInput
                style={styles.textinput}
                onChangeText={() => {console.log(`something is happing`)}}
                autoCorrect={false}
                autoCapitalize="none"                    
            />
        </View>
    )
}

//style sheet
const styles = StyleSheet.create({
    textinput: {
        backgroundColor: 'rgba(255,255,255, .5)',
        borderColor: 'blue',
        borderWidth: 3,
        color: 'black',
        fontFamily: 'helvetica',
        alignContent: 'center',
        marginHorizontal: 40,
        marginTop: 25,
        minHeight: 40,
    }
})
    

//export
export default UserTextInput

