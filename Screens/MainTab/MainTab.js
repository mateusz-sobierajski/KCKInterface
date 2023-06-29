import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stats from "./Stats";

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
            <Tab.Screen name="Oświetlenie" component={Stats}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="lightbulb-group-outline" color={color} size={size} />
                            ),
                            headerShown: false,
                        }}
            />
            <Tab.Screen name="Pompy" component={Stats}
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