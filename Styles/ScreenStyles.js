import {Dimensions, StyleSheet} from "react-native";

export const ScreenStyles = StyleSheet.create({
    mainText: {
        position: 'relative',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        width: '80%',
    },
    sliderDesc:{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        width: '80%',
    },
    Slider:{
        width: Dimensions.get("window").width*0.9,
        height: 60,
    },
})