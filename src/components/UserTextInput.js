// Import Dependencies
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

// Text Input Component
const UserTextInput = () => {
    const [value, setValue] = useState('');

    return (
      <View>
        <Text>Enter value:</Text>
        <TextInput
          style={styles.textinput}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={newValue => setValue(newValue)}
        />
        <Text>My value is {value}</Text>
      </View>
    );
  };

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

