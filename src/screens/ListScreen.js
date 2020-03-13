// Import Dependencies
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// Home Screen Component
const ListScreen = () => {
    const people = [
        {name: "Joanne Smith", role: 'Admin'},
        {name: "Jesse Smith", role: 'User'},
        {name: "Jan Smith", role: 'Influencer'},
        {name: "Jane Smith", role: 'User'},
        {name: "Jimmy Smith", role: 'Influencer'},
        {name: "Joe Smith", role: 'Entrepreneur'}
    ];
    return (
        <View>
        
            <Text style={styles.header}>List Screen</Text>
            {/* pass in data prop && renderItem(element) => {}  */}
            {/* destructure element prop , grab item  */}
            <FlatList  
                showsHorizontalScrollIndicator={false}
                keyExtractor={people => people.name}
                data={people} 
                renderItem={( {item} ) => {
                    console.log(item);
                    return <View>
                        <Text style={styles.text}>{item.name} - {item.role}</Text>
                    </View>
                }}
            />
        </View>

    )
}
//style sheet
const styles = StyleSheet.create({
    header: {
        fontSize: 50
        
    },
    text: {
        marginVertical: 15,
        fontWeight: '700',
        color: 'blue',
    }
})
//export
export default ListScreen;
