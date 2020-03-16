// Import Dependencies
import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

// Text Input Component
const UserTextInput = () => {
    const [value, setValue] = useState('');

    return (
      <View>
        <Text style={{marginHorizontal: 40,}}>ENTER YOUR FIRST AND LAST NAME:</Text>
        <TextInput
          style={styles.textinput}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={newValue => setValue(newValue)}
        />
        {/* conditional render 1st pass */}
        { 
            
            value.length <= 5 ? <Text style={{backgroundColor: 'blue', color: 'red', fontWeight: 'bold'}}>6 or more characters</Text>
            : <Text style={{backgroundColor: 'red', color: 'blue', fontWeight: '100'}}>5 or less characters</Text>
        }        

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
        marginTop: 5,
        marginBottom: 25,
        minHeight: 40,
    }
})
    

//export
export default UserTextInput

