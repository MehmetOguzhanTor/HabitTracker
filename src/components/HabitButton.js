import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HabitButton = ({ habitName }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <TouchableOpacity 
            onPress={handlePress} 
            style={[styles.button, isPressed ? styles.pressed : null]}
        >
            <Text style={styles.habitName}>{habitName}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'red',
    },
    pressed: {
        backgroundColor: 'green',
    },
    habitName: {
        color: 'black',
        fontSize: 16,
        marginTop: 5, 
    },
});

export default HabitButton;