import {Text, View} from "react-native";
import {WelcomeStyles} from "../../../Styles/WelcomeStyles"
import {ScreenStyles} from "../../../Styles/ScreenStyles";
//import MyButton from "../../Elements/MyButton";


const HelpLight = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Karta "Oświetlenie" posiada serię pasków wyboru, każdy służący do ustawiania natężenia oświetlenia o konkretnym kolorze. Punkt wyboru po lewej stronie oznacza zmniejszenia jasności, po prawej zwiększenie.</Text>
        </View>
    );
}

export default HelpLight;