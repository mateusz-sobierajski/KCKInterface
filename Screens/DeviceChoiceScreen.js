import {TextInput, Text, View} from "react-native";
import MyButton from "../Elements/MyButton";
import {WelcomeStyles} from "../Styles/WelcomeStyles";
import {DeviceChoiceStyles} from "../Styles/DeviceChoiceStyles";
import {ScreenStyles} from "../Styles/ScreenStyles";
import {useState} from "react";

/*
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const jsonData = {
            email: formData.get("email"),
            password: formData.get("password")
        };

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(jsonData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.error("Response data:", responseData);
                //TODO: Nawigacja na brudno, trzeba to sensowniej zrobić
                if(responseData.message == "Login successful"){
                    navigate("/dashboard");
                }
                console.log("Response message: ", responseData.message);
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };

     */

const DeviceChoiceScreen = ({navigation}) => {
    const [username, setUsername] = useState('');

    async function submitUsername(){
        const jsonData = {
            ID: username
        }

        try{
            console.log("Sending data");
            const response = await fetch("http://192.168.0.172:5000/login", {
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