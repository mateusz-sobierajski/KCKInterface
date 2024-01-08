import React, {useEffect, useState} from "react";
import {Text, View, Dimensions, ScrollView} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
//import MyButton from "../../Elements/MyButton";
import {
    LineChart
} from "react-native-chart-kit";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import TempsLineChart from "../../Elements/TempsLineChart";

export class Temps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {datasetTemp: '0'}
    }
    onComponentDidMount() {
        //this.interval = setInterval(() => this.setState({ time: Date.now() }), 10000);
    };

    //useInterval(callback, delay) {}
}

const Stats = () => {
    let datasetTemp = {
        datasets: [
            {
                data: [
                    //0,0,0,0,0,0,0,0,0,0
                    24.62, 24.61, 24.61,24.61, 24.61, 24.61, 24.60, 24.61, 24.61, 24.61
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
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
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
    function get_datasetTemp(){
        let tempsData = fetchTemps(1)
        for (let i in tempsData){
            console.log("Parsed data:", tempsData[i])
            datasetTemp.datasets[0].data[i] = parseFloat(tempsData[i])
            console.log("Parsed to float:", datasetTemp.datasets[0].data[i])
        }
        return datasetTemp;
    }
    console.log("Dataset temp:", datasetTemp)
    //datasetTemp.datasets[0].data[0] = 10000;
    const [error, setError] = useState('');
    const [tempsData, setTempsData] = useState([]);
    const [CO2Data, setCO2Data] = useState([]);
    const [waterFlowData, setWaterFlowData] = useState([]);

    async function fetchTemps(datasetChoice){

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
                const parsedData = responseData
                //const parsedData = JSON.parse(responseData);
                console.log("Parsed data:", parsedData)
                setTempsData(parsedData)
                return parsedData
            }
        }
        catch (error) {
            setError('Data receiving error')
            //console.error(error);
            if (error.response) {
                //console.error('Response status:', error.response.status);
                //console.error('Response data:', error.response.data);
            }
        }
    }

    useEffect(() => {
        //const interval = setInterval(() => fetchData(), 10000);
        const fetchData = async () => {
            try {
                await fetchTemps(1);
                console.log("Temps data recieved:", tempsData);
                /*
                for (let i in tempsData){
                    console.log("Parsed data:", tempsData[i])
                    datasetTemp.datasets[0].data[i] = parseFloat(tempsData[i])
                    console.log("Parsed to float:", datasetTemp.datasets[0].data[i])
                }

                 */

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData().then(r => console.log("is this R?:", r));
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <ScrollView>
                <Text style={ScreenStyles.mainText}>Temperatura:</Text>
                <LineChart
                    //data = {datasetTemp}
                    data = {get_datasetTemp()}
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

                <Text style={ScreenStyles.mainText}>Wilgotnośc powietrza:</Text>
                <LineChart
                    data = {datasetWaterFlow}
                    width={Dimensions.get("window").width*0.9} // from react-native
                    height={100}
                    yAxisSuffix=" %rH"
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