/*
useReducer use case
*/ 

//Dependency 
import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorPicker from '../components/ColorPicker'

//constant
const COLOR_CHANGE = 15;

// color reducer
const reducer = (state, action) => {
    console.log(action)
  
    switch (action.type) {
      
        case 'change_Red':
        //Red validation - ternary
         return state.Red + action.payload >= 256 || state.Red + action.payload <= -1 
            ? state 
            : { ...state, Red: state.Red + action.payload };
      
        case 'change_Green':
        //Green validation - ternary
        return state.Green + action.payload >= 256 || state.Green + action.payload <= -1 
        ? state 
        : { ...state, Green: state.Green + action.payload };
      
        case 'change_Blue':
        //Blue validation - ternary
        return state.Blue + action.payload >= 256 || state.Blue + action.payload <= -1 
        ? state 
        : { ...state, Blue: state.Blue + action.payload };
      
        default:
        return state;
    }
};

// ColorPickerScreen Component
const ColorPickerScreen = () => {

    //useReducer functional state 
    const [state, dispatch] = useReducer(reducer, {Red: 0 , Green: 0, Blue: 0 })

    //rgb
    let color = `${state.Red}, ${state.Green}, ${state.Blue} `;
    
    // state delivered to component
    console.log(`CURRENT_STATE:` , state); // Red: 0, Green: 0, Blue: 0

    // colorPickers for RBG
    return (
        <View>
            <Text style={styles.headerText}>Color Picker Screen</Text>

            {/* Red colorPicker */}
            <ColorPicker color="Red" topTitle="+ Red" bottomTitle="- Red"

                // onPressTop incrementing/controlling Red state
                onPressTop={() => 
                    dispatch({ type: 'change_Red', payload: COLOR_CHANGE })
                }
                
                // onPressTop decrementing/controlling R state
                onPressBottom={() => 
                    dispatch({ type: 'change_Red', payload: -1 * COLOR_CHANGE })
                }
            />
            
            {/* Green colorPicker */}
            <ColorPicker color="Green" topTitle="+ Green" bottomTitle="- Green"
            
                // onPressTop incrementing/controlling G state
                onPressTop={() => 
                dispatch({ type: 'change_Green', payload: COLOR_CHANGE })
                }
                
                // onPressTop decrementing/controlling G state
                onPressBottom={() => 
                    dispatch({ type: 'change_Green', payload: -1 * COLOR_CHANGE })
                }
            />
    
            {/* Blue colorPicker */}
            <ColorPicker color="Blue" topTitle="+ Blue" bottomTitle="- Blue" 
                
                // onPressTop incrementing/controlling B state
                onPressTop={() => 
                    dispatch({ type: 'change_Blue', payload: COLOR_CHANGE })                
                }
                
                // onPressTop decrementing/controlling B state
                onPressBottom={() => 
                    dispatch({ type: 'change_Blue', payload: -1 * COLOR_CHANGE })                
                }
            />
            
            <View style={{ minHeight: 200, minWidth: 200, backgroundColor: `rgb(${color})`}}></View>
            

        </View>
    )    
}


//style sheet
const styles = StyleSheet.create({
    headerText: {
        alignSelf: 'center',
    }
})

//export
export default ColorPickerScreen