import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
//import MyButton from "../../Elements/MyButton";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import CustomSlider from "../../Elements/CustomSlider";

ChartJS.register(ArcElement, Tooltip, Legend);

const Lighting = () => {

    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Czerwień 660nm:</Text>
            <CustomSlider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ff0000"}
            />

            <Text style={ScreenStyles.mainText}>Niebieski 450nm:</Text>
            <CustomSlider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#0046ff"}
            />

            <Text style={ScreenStyles.mainText}>Podczerwień 730nm:</Text>
            <CustomSlider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#c80000"}
            />

            <Text style={ScreenStyles.mainText}>Białe podświetlenie:</Text>
            <CustomSlider
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ffffff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ffffff"}
            />
        </View>
    );

}

export default Lighting;