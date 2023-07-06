import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
//import MyButton from "../../Elements/MyButton";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Lighting = () => {

    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={WelcomeStyles.welcomeText}>LIGHT</Text>
            <Doughnut data={12} />
        </View>
    );

}

export default Lighting;