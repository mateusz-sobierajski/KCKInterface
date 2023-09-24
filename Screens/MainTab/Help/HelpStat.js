import {Text, View} from "react-native";
import {WelcomeStyles} from "../../../Styles/WelcomeStyles"
import {ScreenStyles} from "../../../Styles/ScreenStyles";
//import MyButton from "../../Elements/MyButton";


const HelpStat = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Karta "Statystyki" wyświetla zebrane dane z sensorów z ostatnich kilku godzin</Text>
        </View>
    );
}

export default HelpStat;