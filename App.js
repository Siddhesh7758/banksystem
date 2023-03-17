import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import TransferScreen from "./Screens/Transfer";
import ReadScreen from './Screens/ReadData';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: true, cardOverlayEnabled: true, ...TransitionPresets.SlideFromRightIOS,}}>
        <Stack.Screen name="ReadScreen" component={ReadScreen} options={{headerShown: false}} />
        <Stack.Screen name="TransferScreen" component={TransferScreen} options={({route}) => ({title: route.params.first_name + " " + route.params.last_name})} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}