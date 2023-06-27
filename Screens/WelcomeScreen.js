import React from 'react';
import {View, Text} from "react-native";
import MyButton from "../Elements/MyButton";
import {WelcomeStyles} from "../Styles/WelcomeStyles";


const WelcomeScreen = ({navigation}) => {
    return(
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={WelcomeStyles.welcomeText}>Witamy w programie Hydroponika!</Text>

            <MyButton onPress={() => {navigation.navigate('DeviceChoice')}} style={WelcomeStyles.helloButton}> START </MyButton>
            <MyButton onPress={() => {navigation.navigate('DeviceChoice')}} style={WelcomeStyles.button}> USTAWIENIA </MyButton>
        </View>
    );
}

export default WelcomeScreen;