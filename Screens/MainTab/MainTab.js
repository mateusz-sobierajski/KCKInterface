import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stats from "./Stats";
import Lighting from "./Lighting";
import Pumps from "./Pumps";

const Stats = stats;

const MainTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Statystyki" component={Stats}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="chart-line" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Oświetlenie" component={Lighting}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="lightbulb-group-outline" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Pompy" component={Pumps}
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