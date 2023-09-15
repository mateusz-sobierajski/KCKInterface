import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import Slider from "@react-native-community/slider";
//import MyButton from "../../Elements/MyButton";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Lighting = () => {

    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={WelcomeStyles.welcomeText}>Czerwień 660nm:</Text>
            <Slider
                style={WelcomeStyles.welcomeSlider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
            />

            <Text style={WelcomeStyles.welcomeText}>Niebieski 450nm:</Text>
            <Slider
                style={WelcomeStyles.welcomeSlider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
            />

            <Text style={WelcomeStyles.welcomeText}>Podczerwień 730nm:</Text>
            <Slider
                style={WelcomeStyles.welcomeSlider}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
            />

            <Text style={WelcomeStyles.welcomeText}>Białe podświetlenie:</Text>
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

export default Lighting;