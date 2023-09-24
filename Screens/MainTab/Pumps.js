import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import CustomSlider from "../../Elements/CustomSlider";
//import MyButton from "../../Elements/MyButton";

const Pumps = () => {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Pompa 1:</Text>
            <CustomSlider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ffffff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ffffff"}
            />

            <Text style={ScreenStyles.mainText}>Pompa 2:</Text>
            <CustomSlider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#333333"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#333333"}
            />
        </View>
    );
}

export default Pumps;