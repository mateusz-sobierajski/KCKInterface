import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import {ScreenStyles} from "../../Styles/ScreenStyles";
//import MyButton from "../../Elements/MyButton";

const HelpLogin = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}> Przycisk "Start" otwiera ekran wyboru urządzenia</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Przycisk "Ustawienia" nawiguje do ekranu ustawień</Text>
        </View>
    );
}

export default HelpLogin;