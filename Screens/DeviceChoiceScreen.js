import {TextInput, Text, View} from "react-native";
import MyButton from "../Elements/MyButton";
import {WelcomeStyles} from "../Styles/WelcomeStyles";
import {DeviceChoiceStyles} from "../Styles/DeviceChoiceStyles";
import {ScreenStyles} from "../Styles/ScreenStyles";
import {useState} from "react";

const DeviceChoiceScreen = ({navigation}) => {
    const [username, setUsername] = useState('');

    async function submitUsername(){
        const jsonData = {
            ID: username
        }

        try{
            console.log("Sending data");
            //const response = await fetch("http://192.168.0.172:5000/login", {
            const response = await fetch("http://192.168.0.200:5000/login", { //for testing rpi4 connection
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
                    navigation.navigate('MainTab')
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

    return(
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={ScreenStyles.mainText}>Proszę o wprowadzenie ID systemu:</Text>
            <TextInput
                style={DeviceChoiceStyles.textInput}
                placeholder='ID:'
                onChangeText={(text) => setUsername(text)}
                defaultValue={username}
            />
            <MyButton  onPress={()=> submitUsername()} style={DeviceChoiceStyles.button}>
                Zatwierdź
            </MyButton>
        </View>
    );
}
export default DeviceChoiceScreen;

//onPress={() => navigation.navigate('MainTab')} style={DeviceChoiceStyles.button}>