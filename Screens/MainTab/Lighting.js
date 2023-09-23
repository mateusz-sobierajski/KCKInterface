import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import Slider from "@react-native-community/slider";
//import MyButton from "../../Elements/MyButton";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {ScreenStyles} from "../../Styles/ScreenStyles";

ChartJS.register(ArcElement, Tooltip, Legend);

const Lighting = () => {

    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Czerwień 660nm:</Text>
            <Slider
                style={ScreenStyles.Slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
            />

            <Text style={ScreenStyles.mainText}>Niebieski 450nm:</Text>
            <Slider
                style={ScreenStyles.Slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
            />

            <Text style={ScreenStyles.mainText}>Podczerwień 730nm:</Text>
            <Slider
                style={ScreenStyles.Slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
            />

            <Text style={ScreenStyles.mainText}>Białe podświetlenie:</Text>
            <Slider
                style={ScreenStyles.Slider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
    );

}

export default Lighting;