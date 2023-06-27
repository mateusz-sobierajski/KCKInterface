import React from 'react';
import { Pressable, Text } from 'react-native';
import {WelcomeStyles} from "../Styles/WelcomeStyles";


const MyButton = ({ onPress, children, style }) => (
    <Pressable
        style={[WelcomeStyles.button, style]}
        onPress={onPress}
    >
        <Text style={WelcomeStyles.text}>{children}</Text>
    </Pressable>
);

export default MyButton;