// Import Dependencies
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen  from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorPickerScreen from './src/screens/ColorPickerScreen';
import BasicStyleScreen from './src/screens/BasicStyleScreen';


// Home Screen Component
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Colors: ColorScreen,
    ColorPicker: ColorPickerScreen,
    BasicStyle: BasicStyleScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "HOME"
    }
  }
);

//export
export default createAppContainer(navigator);
