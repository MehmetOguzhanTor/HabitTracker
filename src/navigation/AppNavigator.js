import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Habitoptions from '../screens/Habitoptions';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Habitoptions" component={Habitoptions} />
      </Stack.Navigator>
    );
  };
  //end 
  export default AppNavigator;

