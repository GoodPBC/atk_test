// Import Dependencies
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen  from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen'


// Home Screen Component
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

//export
export default createAppContainer(navigator);
