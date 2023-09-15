import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import Slider from "@react-native-community/slider";
//import MyButton from "../../Elements/MyButton";

const HelpID = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={WelcomeStyles.welcomeText}>Do pola ID należy wpisać ID danego systemu</Text>
            <Text></Text>
            <Text style={WelcomeStyles.welcomeText}>Po wpisaniu ID należy zatwierdzić przyciskiem "Zatwierdź"</Text>
        </View>
    );
}

export default HelpID;