import {Text, View, Dimensions, ScrollView} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
//import MyButton from "../../Elements/MyButton";

import {
    LineChart
} from "react-native-chart-kit";
import {ScreenStyles} from "../../Styles/ScreenStyles";

let datasetTemp = {
    datasets: [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
            ]
        }
    ]
}

let datasetCO2 = {
    datasets: [
        {
            data: [
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000,
                Math.random() * 1000
            ]
        }
    ]
}

let datasetWaterFlow = {
    datasets: [
        {
            data: [
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10
            ]
        }
    ]
}

const Stats = () => {

    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <ScrollView>
                <Text style={ScreenStyles.mainText}>Temperatura:</Text>
                <LineChart
                    data = {datasetTemp}
                    width={Dimensions.get("window").width*0.9} // from react-native
                    height={100}
                    yAxisSuffix="°C"
                    yLabelsOffset={0}
                    yAxisInterval={.1} // optional, defaults to 1
                    chartConfig={{
                        backgroundGradientFrom: WelcomeStyles.welcomeScreen.backgroundColor,
                        backgroundGradientTo: "#696969",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "1",
                            stroke: "#444444"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 2
                    }}
                />

                <Text style={ScreenStyles.mainText}>Stężenie CO2:</Text>
                <LineChart
                    data = {datasetCO2}
                    width={Dimensions.get("window").width*0.9} // from react-native
                    height={100}
                    yAxisSuffix=" ppm"
                    yLabelsOffset={0}
                    yAxisInterval={.1} // optional, defaults to 1
                    chartConfig={{
                        backgroundGradientFrom: WelcomeStyles.welcomeScreen.backgroundColor,
                        backgroundGradientTo: "#696969",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "1",
                            stroke: "#444444"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 2
                    }}
                />

                <Text style={ScreenStyles.mainText}>Przepływ wody:</Text>
                <LineChart
                    data = {datasetWaterFlow}
                    width={Dimensions.get("window").width*0.9} // from react-native
                    height={100}
                    yAxisSuffix=" L/min"
                    yLabelsOffset={0}
                    yAxisInterval={.1} // optional, defaults to 1
                    chartConfig={{
                        backgroundGradientFrom: WelcomeStyles.welcomeScreen.backgroundColor,
                        backgroundGradientTo: "#696969",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "2",
                            strokeWidth: "1",
                            stroke: "#444444"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 2
                    }}
                />
            </ScrollView>

        </View>
    );

}

export default Stats;