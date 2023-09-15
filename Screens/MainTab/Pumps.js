import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import Slider from "@react-native-community/slider";
//import MyButton from "../../Elements/MyButton";

const Pumps = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={WelcomeStyles.welcomeText}>Pompa 1:</Text>
            <Slider
                style={WelcomeStyles.welcomeSlider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />

            <Text style={WelcomeStyles.welcomeText}>Pompa 2:</Text>
            <Slider
                style={WelcomeStyles.welcomeSlider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
    );
}

export default Pumps;