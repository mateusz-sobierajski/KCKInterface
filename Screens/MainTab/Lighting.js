import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
//import MyButton from "../../Elements/MyButton";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import CustomSlider from "../../Elements/CustomSlider";
import {useState} from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Lighting = () => {

    const [lightValue1, setLightValue1] = useState(0);
    const [lightValue2, setLightValue2] = useState(0);
    const [lightValue3, setLightValue3] = useState(0);
    const [lightValue4, setLightValue4] = useState(0);

    //let defaultLightValues = [0, 0];
    //const [lightValue, setLightValue] = useState(defaultLightValues);

    async function submitLightValue(lightID){

        let lightValue;
        switch (lightID){
            case 1:
                lightValue = lightValue1;
                break;
            case 2:
                lightValue = lightValue2;
                break;
            case 3:
                lightValue = lightValue3;
                break;
            case 4:
                lightValue = lightValue4;
                break;
            default:
                lightValue = 0;
                break;
        }

        const jsonData = {
            ID: lightID,
            value: lightValue
        }

        try{
            console.log("Sending data to light");
            const response = await fetch("http://192.168.0.172:5000/lighting", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(jsonData)
            });
            console.log("Data sent");
            if(response.ok){
                console.log("Response ok");
                const responseData = await response.json();
                console.error("Response data:", responseData);
                console.log("Status: ", responseData.status);
                console.log("Message: ", responseData.message);
                if(responseData.status === "success"){
                    console.log("Light value changed")
                }
            }
        }
        catch (error){
            console.error(error);
            if (error.response){
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
        }
    }

    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Czerwień 660nm:</Text>
            <CustomSlider
                value={lightValue1}
                setValue={setLightValue1}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ff0000"}
                onSlidingComplete={() => submitLightValue(1)}
            />

            <Text style={ScreenStyles.mainText}>Niebieski 4502nm:</Text>
            <CustomSlider
                value={lightValue2}
                setValue={setLightValue2}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#0046ff"}
                onSlidingComplete={() => submitLightValue(2)}
            />

            <Text style={ScreenStyles.mainText}>Podczerwień 730nm:</Text>
            <CustomSlider
                value={lightValue3}
                setValue={setLightValue3}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#c80000"}
                onSlidingComplete={() => submitLightValue(3)}
            />

            <Text style={ScreenStyles.mainText}>Białe podświetlenie:</Text>
            <CustomSlider
                value={lightValue4}
                setValue={setLightValue4}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ffffff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ffffff"}
                onSlidingComplete={() => submitLightValue(4)}
            />
        </View>
    );

}

export default Lighting;