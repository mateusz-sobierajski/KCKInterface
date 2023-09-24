import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stats from "./Stats";
import Lighting from "./Lighting";
import Pumps from "./Pumps";
import {Text, TouchableOpacity} from "react-native";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HelpStat from "./Help/HelpStat";
import HelpLight from "./Help/HelpLight";
import HelpPump from "./Help/HelpPump";

const Stats = stats;

const StatStack = createNativeStackNavigator();
const LightStack = createNativeStackNavigator();
const PumpStack = createNativeStackNavigator();

function StatStackScreen({navigation}) {
    return (
        <StatStack.Navigator>
            <StatStack.Screen name="Statystyki" component={Stats}
            options={{
                headerRight: () => (
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Pomoc Statystyki')}>
                        <Text style={{ marginRight: "5%" }}>Pomoc</Text>
                    </TouchableOpacity>
                ),
            }}
            />
            <StatStack.Screen
                name="Pomoc Statystyki"
                component={HelpStat}
            />
        </StatStack.Navigator>
    );
}

function LightStackScreen({navigation}) {
    return (
        <LightStack.Navigator>
            <LightStack.Screen name="Oświetlenie" component={Lighting}
                              options={{
                                  headerRight: () => (
                                      <TouchableOpacity onPress={() =>
                                          navigation.navigate('Pomoc Oświetlenie')}>
                                          <Text style={{ marginRight: "5%" }}>Pomoc</Text>
                                      </TouchableOpacity>
                                  ),
                              }}
            />
            <PumpStack.Screen
                name="Pomoc Oświetlenie"
                component={HelpLight}
            />
        </LightStack.Navigator>
    );
}

function PumpStackScreen({navigation}) {
    return (
        <PumpStack.Navigator>
            <PumpStack.Screen name="Pompy" component={Pumps}
                               options={{
                                   headerRight: () => (
                                       <TouchableOpacity onPress={() =>
                                           navigation.navigate('Pomoc Pompy')}>
                                           <Text style={{ marginRight: "5%" }}>Pomoc</Text>
                                       </TouchableOpacity>
                                   ),
                               }}
            />
            <PumpStack.Screen
                name="Pomoc Pompy"
                component={HelpPump}
            />
        </PumpStack.Navigator>
    );
}

const MainTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name={"Statystyki "} component={StatStackScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="chart-line" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Oświetlenie " component={LightStackScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="lightbulb-group-outline" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Pompy " component={PumpStackScreen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="pump" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
        </Tab.Navigator>
    );
}

export default MainTab;