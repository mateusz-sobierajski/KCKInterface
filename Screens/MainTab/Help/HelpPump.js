import {Text, View} from "react-native";
import {WelcomeStyles} from "../../../Styles/WelcomeStyles"
import {ScreenStyles} from "../../../Styles/ScreenStyles";
//import MyButton from "../../Elements/MyButton";


const HelpPump = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Karta "Pompy" posiada serię pasków wyboru, każdy służący do pracy pompy. Punkt wyboru po lewej stronie oznacza zmniejszenia jasności, po prawej zwiększenie.</Text>
        </View>
    );
}

export default HelpPump;