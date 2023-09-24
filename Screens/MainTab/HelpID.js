import {Text, TextInput, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import React from "react";
import {DeviceChoiceStyles} from "../../Styles/DeviceChoiceStyles";
import MyButton from "../../Elements/MyButton";

const HelpID = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Do pola</Text>
            <TextInput
                style={DeviceChoiceStyles.textInput}
                placeholder='ID:'
                editable={false}
            />
            <Text/>
            <Text style={ScreenStyles.mainText}>należy wpisać ID danego systemu</Text>

            <Text></Text>

            <Text style={ScreenStyles.mainText}>Po wpisaniu ID należy zatwierdzić przyciskiem</Text>
            <MyButton style={WelcomeStyles.helloButton}> Zatwierdź </MyButton>
            <Text/>
        </View>
    );
}

export default HelpID;