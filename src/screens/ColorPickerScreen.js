//Dependency 
import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorPicker from '../components/ColorPicker'

//constant
const COLOR_CHANGE = 15;

// color reducer
const reducer = (state, action) => {
  
    switch (action.changeColor) {
      case 'Red':
          // reducer log
          console.log(`STATE: `, state) // state 
          console.log(`ACTION ON: `, action.changeColor) // action on Red
          console.log(`ACTION CHANGE VALUE: `, action.amount) // apply amount to Red

        //Red validation
        if(state.Red + action.amount >= 256 || state.Red + action.amount <= -1) {
            return state;
        }
        //Red +/- 15 
        return { ...state, Red: state.Red + action.amount };
      
        case 'Green':
      
        //Green validation
        if(state.Green + action.amount >= 256 || state.Green + action.amount <= -1) {
            return state;
        }        
        //Green +/- 15 
        return { ...state, Green: state.Green + action.amount };
      
        case 'Blue':

        //Blue validation
        if(state.Blue + action.amount >= 256 || state.Blue + action.amount <= -1) {
            return state;
        }         
        //Blue +/- 15   
        return { ...state, Blue: state.Blue + action.amount };
      
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
    console.log(`THis is State:` , state); // Red: 0, Green: 0, Blue: 0

    // colorPickers for RBG
    return (
        <View>
            <Text style={styles.headerText}>Color Picker Screen</Text>

            {/* Red colorPicker */}
            <ColorPicker color="Red" topTitle="+ Red" bottomTitle="- Red"

                // onPressTop incrementing/controlling Red state
                onPressTop={() => 
                    dispatch({ changeColor: 'Red', amount: COLOR_CHANGE })
                }
                
                // onPressTop decrementing/controlling R state
                onPressBottom={() => 
                    dispatch({ changeColor: 'Red', amount: -1 * COLOR_CHANGE })
                }
            />
            
            {/* Green colorPicker */}
            <ColorPicker color="Green" topTitle="+ Green" bottomTitle="- Green"
            
                // onPressTop incrementing/controlling G state
                onPressTop={() => 
                dispatch({ changeColor: 'Green', amount: COLOR_CHANGE })
                }
                
                // onPressTop decrementing/controlling G state
                onPressBottom={() => 
                    dispatch({ changeColor: 'Green', amount: -1 * COLOR_CHANGE })
                }
            />
    
            {/* Blue colorPicker */}
            <ColorPicker color="Blue" topTitle="+ Blue" bottomTitle="- Blue" 
                
                // onPressTop incrementing/controlling B state
                onPressTop={() => 
                    dispatch({ changeColor: 'Blue', amount: COLOR_CHANGE })                
                }
                
                // onPressTop decrementing/controlling B state
                onPressBottom={() => 
                    dispatch({ changeColor: 'Blue', amount: -1 * COLOR_CHANGE })                
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