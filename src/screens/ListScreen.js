// Import Dependencies
import React , {useState} from 'react'
import { FlatList, StyleSheet, Text, View, TextInput} from 'react-native'
import UserTextInput from '../components/UserTextInput'

// List Screen Component
const ListScreen = () => {
    const [name, setName] = useState('');

    const people = [
        {name: "Joanne Smith", role: 'Admin'},
        {name: "Jesse Smith", role: 'User'},
        {name: "Jan Smith", role: 'Influencer'},
        {name: "Jane Smith", role: 'User'},
        {name: "Jimmy Smith", role: 'Influencer'},
        {name: "Joe Smith", role: 'Entrepreneur'}
    ];

    

    return (
        <View style={styles.wrapper}>
        
            <Text style={styles.header}>Profile</Text>
            
            {/* Profile Input */}
            <TextInput
                    style={styles.textinput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={newValue => setName(newValue)}
            />
            <Text style={styles.placeholderText}>My name is: <Text style={styles.text}>{name}</Text></Text>

            {/* Profile FlatList */}
            <FlatList  
                showsHorizontalScrollIndicator={false}
                keyExtractor={people => people.name}
                data={people} 
                renderItem={( {item} ) => {
                    return <View style={styles.text}>
                        <Text style={styles.text}>{item.name} - {item.role}</Text>
                    </View>
                }}
            />
            



        </View>

    )
}
//style sheet
const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 40,
    },
    header: {
        fontSize: 50
        
    },
    text: {
        marginVertical: 15,
        fontWeight: '700',
        color: 'blue',
    },
    textinput: {
        backgroundColor: 'rgba(255,255,255, .5)',
        borderColor: 'blue',
        borderWidth: 3,
        color: 'black',
        fontFamily: 'helvetica',
        alignContent: 'center',
        // marginHorizontal: 40,
        marginTop: 25,
        minHeight: 40,
    },
    placeholderText: {
        color: 'black',
        fontFamily: 'helvetica',
        alignContent: 'center',
        // marginHorizontal: 40,
        marginTop: 5,
    }
})
//export
export default ListScreen;
