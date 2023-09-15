import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import Slider from "@react-native-community/slider";
//import MyButton from "../../Elements/MyButton";

const HelpFun = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text></Text>
            <Text style={WelcomeStyles.welcomeText}>Karta "Statystyki" wyświetla zebrane dane z sensorów z ostatnich kilku godzin</Text>
            <Text></Text>
            <Text style={WelcomeStyles.welcomeText}>Karta "Oświetlenie" posiada serię pasków wyboru, każdy służący do ustawiania natężenia oświetlenia o konkretnym kolorze. Punkt wyboru po lewej stronie oznacza zmniejszenia jasności, po prawej zwiększenie.</Text>
            <Text></Text>
            <Text style={WelcomeStyles.welcomeText}>Karta "Pompy" posiada serię pasków wyboru, każdy służący do pracy pompy. Punkt wyboru po lewej stronie oznacza zmniejszenia jasności, po prawej zwiększenie.</Text>
        </View>
    );
}

export default HelpFun;