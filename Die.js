import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./CssStyles";

export default function Die(props) {
    const Diestyles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <TouchableOpacity 
            
            style={[Diestyles, styles.dieFace]}
            onPress={props.holdDice}
        >
            <Text style={styles.dieNum}>{props.value}</Text>
        </TouchableOpacity>
    );
}


