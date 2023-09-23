import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import {ScreenStyles} from "../../Styles/ScreenStyles";
//import MyButton from "../../Elements/MyButton";

const HelpID = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Do pola ID należy wpisać ID danego systemu</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Po wpisaniu ID należy zatwierdzić przyciskiem "Zatwierdź"</Text>
        </View>
    );
}

export default HelpID;