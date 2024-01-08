import React from 'react';
import {Dimensions, ScrollView, View} from "react-native";
import {WelcomeStyles} from "../Styles/WelcomeStyles";
import {LineChart} from "react-native-chart-kit";

let datasetTemp = {
    datasets: [
        {
            data: [0,0,0,0,0,0,0,0,0,0]
        }
    ]
}

export default class TempsLineChart extends React.Component {
    constructor(props) {
        super(props);
    }

    useEffect() {
        //this.interval = setInterval(() => this.fetchTemps(), 1000);
    }


    onComponentDidMount() {
        //this.interval = setInterval(() => this.fetchTemps(1), 1000);
    };



    async fetchTemps(datasetChoice){

        const jsonData = {
            message: datasetChoice
        };

        try {
            console.log("Sending data");
            const response = await fetch("http://192.168.0.200:5000/datasets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(jsonData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Parsed data:", responseData)
                setTempsData(responseData)
                for (let i in responseData){
                    console.log("Parsed data:", responseData[i])
                    datasetTemp.datasets[0].data[i] = parseFloat(responseData[i])
                    console.log("Parsed to float:", datasetTemp.datasets[0].data[i])
                }
            }
        }
        catch (error) {
            setError('Data receiving error')
            console.error(error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        }
    }

    render() {
        return (
            <ScrollView>
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
            </ScrollView>
        )
    }
}