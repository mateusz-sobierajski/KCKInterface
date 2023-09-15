import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import Slider from "@react-native-community/slider";
//import MyButton from "../../Elements/MyButton";

const HelpLogin = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={WelcomeStyles.welcomeText}> Przycisk "Start" otwiera ekran wyboru urządzenia</Text>
            <Text></Text>
            <Text style={WelcomeStyles.welcomeText}>Przycisk "Ustawienia" nawiguje do ekranu ustawień</Text>
        </View>
    );
}

export default HelpLogin;