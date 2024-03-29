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
        backgroundColor: 'blue',
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
    buttonTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusStyle: {
        fontSize: 60,
        color: 'white',
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
});

export default ButtonComponent;
