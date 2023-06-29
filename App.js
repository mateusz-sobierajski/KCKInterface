import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import welcome from "./Screens/WelcomeScreen";
import devicechoice from "./Screens/DeviceChoiceScreen";
import mainTab from "./Screens/MainTab/MainTab";
import {Text, TouchableOpacity} from "react-native";

const WelcomeScreen = welcome;
const DeviceChoice = devicechoice;
const MainTab = mainTab;

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "WelcomeScreen">
            <Stack.Screen
                name="Home"
                component={WelcomeScreen}
                options={{
                    headerTitle: 'Witam!',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => console.log('Button pressed!')}>
                            <Text style={{ marginRight: 10 }}>Pomoc</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="DeviceChoice"
                component={DeviceChoice}
                options={{
                    headerTitle: 'ID urządzenia',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => console.log('Button pressed!')}>
                            <Text style={{ marginRight: 10 }}>Pomoc</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="MainTab"
                component={MainTab}
                options={{
                    headerTitle: 'Funkcjonalności',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => console.log('Button pressed!')}>
                            <Text style={{ marginRight: 10 }}>Pomoc</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
      </NavigationContainer>

  );
}