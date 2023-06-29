import {TextInput, Text, View} from "react-native";
import MyButton from "../Elements/MyButton";
import {WelcomeStyles} from "../Styles/WelcomeStyles";
import {DeviceChoiceStyles} from "../Styles/DeviceChoiceStyles";


const DeviceChoiceScreen = ({navigation}) => {
    return(
        <View style={WelcomeStyles.welcomeScreen}>
            <Text style={WelcomeStyles.welcomeText}>Proszę o wprowadzenie ID systemu:</Text>
            <TextInput
                style={DeviceChoiceStyles.textInput}
                placeholder='ID:'
                //onChangeText={(text) => setUsername(text)}
                //value={username}
            />
            <MyButton onPress={() => navigation.navigate('MainTab')} style={DeviceChoiceStyles.button}>
                Zatwierdź
            </MyButton>
        </View>
    );
}
export default DeviceChoiceScreen;