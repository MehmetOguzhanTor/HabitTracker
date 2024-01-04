import React, { useState } from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const ButtonComponent = ({onPress, title, children }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
        if (onPress) onPress();
    };
    const buttonStyle = {
        ...styles.button,
        backgroundColor: 'grey',
    };
    return (
        <TouchableOpacity onPress={handlePress} style={buttonStyle}>
            {children || <Text style={styles.buttonText}>{title}</Text>}
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // Center the button and text vertically
    },
    button: {
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
});

export default ButtonComponent;
