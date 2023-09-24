import {Text, View} from "react-native";
import {ScreenStyles} from "../Styles/ScreenStyles";
import Slider from "@react-native-community/slider";
import {useState} from "react";

const CustomSlider = (props) => {
    const [value, setValue] = useState(props.value ?? 0);
    return (
        <View>
            <Text style={ScreenStyles.sliderDesc}>{value + "%"}</Text>
            <Slider
                step={1}
                style={ScreenStyles.Slider}
                {...props}
                value={value}
                onValueChange={setValue}
            />
        </View>
    );
};
export default CustomSlider;