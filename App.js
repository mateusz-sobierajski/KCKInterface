import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";

import welcome from "./Screens/WelcomeScreen";
import devicechoice from "./Screens/DeviceChoiceScreen";
import mainTab from "./Screens/MainTab/MainTab";

import helplogin from "./Screens/MainTab/HelpLogin";
import HelpID from "./Screens/MainTab/HelpID";
import helpFun from "./Screens/MainTab/HelpFun";

import {Text, TouchableOpacity} from "react-native";

const WelcomeScreen = welcome;
const DeviceChoice = devicechoice;
const MainTab = mainTab;

const Help1 = helplogin;
const Help2 = HelpID;
const Help3 = helpFun;

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "WelcomeScreen">
            <Stack.Screen
                name="Home"
                component={WelcomeScreen}
                options={({ navigation }) => ({ // Pass navigation as a parameter
                    headerTitle: 'Witam!',
                    headerRight: () => (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Help Login')}>
                            <Text style={{ marginRight: 10 }}>Pomoc</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="DeviceChoice"
                component={DeviceChoice}
                options={({ navigation }) => ({
                    headerTitle: 'ID urządzenia',
                    headerRight: () => (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Help ID')}>
                            <Text style={{ marginRight: 10 }}>Pomoc</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="MainTab"
                component={MainTab}
                options={({ navigation }) => ({
                    headerTitle: 'Funkcjonalności',
                    headerRight: () => (
                        <TouchableOpacity onPress={() =>
                            navigation.navigate('Help Funkcjonalności')}>
                            <Text style={{ marginRight: 10 }}>Pomoc</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="Help Login"
                component={Help1}
            />
            <Stack.Screen
                name="Help ID"
                component={Help2}
            />
            <Stack.Screen
                name="Help Funkcjonalności"
                component={Help3}
            />
        </Stack.Navigator>
      </NavigationContainer>

  );
}