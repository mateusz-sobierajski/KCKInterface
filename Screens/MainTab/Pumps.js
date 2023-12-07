import {Text, View} from "react-native";
import {WelcomeStyles} from "../../Styles/WelcomeStyles";
import {ScreenStyles} from "../../Styles/ScreenStyles";
import CustomSlider from "../../Elements/CustomSlider";
import {useState} from "react";
//import MyButton from "../../Elements/MyButton";

const Pumps = () => {
    const [pumpValue1, setPumpValue1] = useState(0);
    const [pumpValue2, setPumpValue2] = useState(0);

    //let defaultPumpValues = [0, 0];
    //const [pumpValue, setPumpValue] = useState(defaultPumpValues);

    async function submitPumpValue(pumpID){

        let pumpValue;
        switch (pumpID){
            case 1:
                pumpValue = pumpValue1;
                break;
            case 2:
                pumpValue = pumpValue2;
                break;
            default:
                pumpValue = 0;
                break;
        }

        const jsonData = {
            ID: pumpID,
            value: pumpValue
        }

        try{
            console.log("Sending data to pump");
            //const response = await fetch("http://192.168.0.172:5000/pumps", {
            const response = await fetch("http://192.168.0.200:5000/pumps", { //for testing rpi4 connection
            //const response = await fetch("http://192.168.0.200:5000/datasets", { //for testing datasets connection
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
                    console.log("Pump value changed")
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
            <Text style={ScreenStyles.mainText}>Pompa 1:</Text>
            <CustomSlider
                value={pumpValue1}
                setValue={setPumpValue1}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#ffffff"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#ffffff"}
                onSlidingComplete={() => submitPumpValue(1)}
            />

            <Text style={ScreenStyles.mainText}>Pompa 2:</Text>
            <CustomSlider
                value={pumpValue2}
                setValue={setPumpValue2}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#333333"
                maximumTrackTintColor="#000000"
                thumbTintColor={"#333333"}
                onSlidingComplete={() => submitPumpValue(2)}
            />
        </View>
    );
}

export default Pumps;