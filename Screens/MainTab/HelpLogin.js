import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import MyButton from "../../Elements/MyButton";
import React from "react";

const HelpLogin = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Przycisk</Text>
            <MyButton style={WelcomeStyles.helloButton}> START </MyButton>
            <Text/>
            <Text style={ScreenStyles.mainText}>otwiera ekran wyboru urządzenia</Text>

            <Text/>

            <Text style={ScreenStyles.mainText}>Przycisk</Text>
            <MyButton style={WelcomeStyles.helloButton}> USTAWIENIA </MyButton>
            <Text/>
            <Text style={ScreenStyles.mainText}>nawiguje do ekranu ustawień</Text>
        </View>
    );
}

export default HelpLogin;