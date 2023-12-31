import {Text, ScrollView} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
//import MyButton from "../../Elements/MyButton";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import CustomSlider from "../../Elements/CustomSlider";
import {useState} from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Lighting = () => {

    const [Blue_T_L, setBlue_T_L] = useState(0);
    const [Blue_T_R, setBlue_T_R] = useState(0);
    const [Blue_B_L, setBlue_B_L] = useState(0);
    const [Blue_B_R, setBlue_B_R] = useState(0);

    const [Red_T_L, setRed_T_L] = useState(0);
    const [Red_T_R, setRed_T_R] = useState(0);
    const [Red_B_L, setRed_B_L] = useState(0);
    const [Red_B_R, setRed_B_R] = useState(0);

    const [IR_T_L, setIR_T_L] = useState(0);
    const [IR_T_R, setIR_T_R] = useState(0);
    const [IR_B_L, setIR_B_L] = useState(0);
    const [IR_B_R, setIR_B_R] = useState(0);

    //let defaultLightValues = [0, 0];
    //const [lightValue, setLightValue] = useState(defaultLightValues);

    async function submitLightValue(lightID){

        let lightValue;
        switch (lightID){
            case 'Blue_T_L':
                lightValue = Blue_T_L;
                break;
            case 'Red_T_L':
                lightValue = Red_T_L;
                break;
            case 'IR_T_L':
                lightValue = IR_T_L;
                break;
            case 'Blue_T_R':
                lightValue = Blue_T_R;
                break;
            case 'Red_T_R':
                lightValue = Red_T_R;
                break;
            case 'IR_T_R':
                lightValue = IR_T_R;
                break;
            case 'Blue_B_L':
                lightValue = Blue_B_L;
                break;
            case 'Red_B_L':
                lightValue = Red_B_L;
                break;
            case 'IR_B_L':
                lightValue = IR_B_L;
                break;
            case 'Blue_B_R':
                lightValue = Blue_B_R;
                break;
            case 'Red_B_R':
                lightValue = Red_B_R;
                break;
            case 'IR_B_R':
                lightValue = IR_B_R;
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
            //const response = await fetch("http://192.168.0.172:5000/lighting", {
            const response = await fetch("http://192.168.0.200:5000/lighting", {
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
        <ScrollView contentContainerStyle={WelcomeStyles.ScrollViewScreen}>
            <Text style={ScreenStyles.headerText}>Roślina Lewa Górna:</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Czerwień 660nm:</Text>
            <CustomSlider
                value={Red_T_L}
                setValue={setRed_T_L}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ff0000"}
                onSlidingComplete={() => submitLightValue('Red_T_L')}
            />

            <Text style={ScreenStyles.mainText}>Niebieski 450nm:</Text>
            <CustomSlider
                value={Blue_T_L}
                setValue={setBlue_T_L}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#0046ff"}
                onSlidingComplete={() => submitLightValue('Blue_T_L')}
            />

            <Text style={ScreenStyles.mainText}>Podczerwień 730nm:</Text>
            <CustomSlider
                value={IR_T_L}
                setValue={setIR_T_L}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#c80000"}
                onSlidingComplete={() => submitLightValue('IR_T_L')}
            />


            <Text style={ScreenStyles.headerText}>Roślina Prawa Górna:</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Czerwień 660nm:</Text>
            <CustomSlider
                value={Red_T_R}
                setValue={setRed_T_R}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ff0000"}
                onSlidingComplete={() => submitLightValue('Red_T_R')}
            />

            <Text style={ScreenStyles.mainText}>Niebieski 450nm:</Text>
            <CustomSlider
                value={Blue_T_R}
                setValue={setBlue_T_R}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#0046ff"}
                onSlidingComplete={() => submitLightValue('Blue_T_R')}
            />

            <Text style={ScreenStyles.mainText}>Podczerwień 730nm:</Text>
            <CustomSlider
                value={IR_T_R}
                setValue={setIR_T_R}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#c80000"}
                onSlidingComplete={() => submitLightValue('IR_T_R')}
            />

            <Text style={ScreenStyles.headerText}>Roślina Lewa Dolna:</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Czerwień 660nm:</Text>
            <CustomSlider
                value={Red_B_L}
                setValue={setRed_B_L}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ff0000"}
                onSlidingComplete={() => submitLightValue('Red_B_L')}
            />

            <Text style={ScreenStyles.mainText}>Niebieski 450nm:</Text>
            <CustomSlider
                value={Blue_B_L}
                setValue={setBlue_B_L}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#0046ff"}
                onSlidingComplete={() => submitLightValue('Blue_B_L')}
            />

            <Text style={ScreenStyles.mainText}>Podczerwień 730nm:</Text>
            <CustomSlider
                value={IR_B_L}
                setValue={setIR_B_L}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#c80000"}
                onSlidingComplete={() => submitLightValue('IR_B_L')}
            />

            <Text style={ScreenStyles.headerText}>Roślina Prawa Dolna:</Text>
            <Text></Text>
            <Text style={ScreenStyles.mainText}>Czerwień 660nm:</Text>
            <CustomSlider
                value={Red_B_R}
                setValue={setRed_B_R}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ff0000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ff0000"}
                onSlidingComplete={() => submitLightValue('Red_B_R')}
            />

            <Text style={ScreenStyles.mainText}>Niebieski 450nm:</Text>
            <CustomSlider
                value={Blue_B_R}
                setValue={setBlue_B_R}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#0046ff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#0046ff"}
                onSlidingComplete={() => submitLightValue('Blue_B_R')}
            />

            <Text style={ScreenStyles.mainText}>Podczerwień 730nm:</Text>
            <CustomSlider
                value={IR_B_R}
                setValue={setIR_B_R}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#c80000"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#c80000"}
                onSlidingComplete={() => submitLightValue('IR_B_R')}
            />
        </ScrollView>
    );

}

export default Lighting;