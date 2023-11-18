import React from "react";
import {Text, View} from "react-native";
import {ScreenStyles} from "../Styles/ScreenStyles";
import Slider from "@react-native-community/slider";
import PropTypes from "prop-types";
//import {useState} from "react";

export default class CustomSlider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={ScreenStyles.sliderDesc}>{this.props.value + "%"}</Text>
                <Slider
                    step={1}
                    style={ScreenStyles.Slider}
                    {...this.props}
                    value={this.props.value}
                    onValueChange={this.props.setValue}
                />
            </View>
        );
    }
}

CustomSlider.propTypes = {
    value: PropTypes.number,
    setValue: PropTypes.func
};


/*
const CustomSlider = (props, {value, setValue}) => {
    //const [value, setValue] = useState(props.value ?? 0);
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

 */