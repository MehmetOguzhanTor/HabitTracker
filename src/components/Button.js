import React, { useState } from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const ButtonComponent = ({onPress, title}) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
        onPress && onPress();
    };
    const buttonStyle = {
        ...styles.button,
        backgroundColor: isPressed ? 'red' : 'green',
    };
    return (
        <TouchableOpacity onPress={handlePress} style={buttonStyle}>
        <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});

export default ButtonComponent;
