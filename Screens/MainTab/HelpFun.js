import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import {ScreenStyles} from "../../Styles/ScreenStyles";
//import MyButton from "../../Elements/MyButton";


const HelpFun = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Karta "Statystyki" wyświetla zebrane dane z sensorów z ostatnich kilku godzin</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Karta "Oświetlenie" posiada serię pasków wyboru, każdy służący do ustawiania natężenia oświetlenia o konkretnym kolorze. Punkt wyboru po lewej stronie oznacza zmniejszenia jasności, po prawej zwiększenie.</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Karta "Pompy" posiada serię pasków wyboru, każdy służący do pracy pompy. Punkt wyboru po lewej stronie oznacza zmniejszenia jasności, po prawej zwiększenie.</Text>
        </View>
    );
}

export default HelpFun;