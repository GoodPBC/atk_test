// Import Dependencies
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// Home Screen Component
const ListScreen = () => {
    const people = [
        {name: "Joanne Smith"},
        {name: "Jesse Smith"},
        {name: "Jan Smith"},
        {name: "Jane Smith"},
        {name: "Jimmy Smith"},
        {name: "Joe Smith"}
    ];
    return (
        <View>
            <Text style={styles.text}>List Screen</Text>
            {/* pass in data prop && renderItem(element) => {}  */}
            {/* destructure element prop , grab item  */}
            <FlatList 
                data={people} 
                renderItem={( {item} ) => {
                    console.log(item);
                    return <Text>{item.name}</Text>;
                }}
            />
        </View>

    )
}
//style sheet
const styles = StyleSheet.create({
    text: {
        fontSize: 50
    }
})
//export
export default ListScreen;
