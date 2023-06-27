import {TextInput, Text, View} from "react-native";
import MyButton from "../Elements/MyButton";
import {WelcomeStyles} from "../Styles/WelcomeStyles";
import {DeviceChoiceStyles} from "../Styles/DeviceChoiceStyles";

function DeviceChoiceScreen({navigation}) {
    return (
        <View style={WelcomeStyles.welcomeScreen}>
            <View style={DeviceChoiceStyles.registerScreenBox}>
                <Text style={WelcomeStyles.welcomeText}>Proszę o wprowadzenie ID systemu:</Text>
                <TextInput
                    style={DeviceChoiceStyles.textInput}
                    placeholder='ID:'
                    onChangeText={(text) => setUsername(text)}
                    //value={username}
                />
                <MyButton onPress={navigation.navigate('Login')} style={DeviceChoiceStyles.button}>
                    Wyszukaj
                </MyButton>
            </View>
        </View>
    );
}

export default DeviceChoiceScreen;