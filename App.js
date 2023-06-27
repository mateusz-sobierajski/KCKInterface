import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import welcome from "./Screens/WelcomeScreen";
import devicechoice from "./Screens/DeviceChoiceScreen";

const WelcomeScreen = welcome;
const DeviceChoice = devicechoice;

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "WelcomeScreen">
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="DeviceChoice" component={DeviceChoice}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

