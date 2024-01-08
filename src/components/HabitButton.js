import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HabitButton = ({ habitName, onCompleted }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handlePress = () => {
        setIsCompleted(!isCompleted); // Toggle the completion status
        if (onCompleted) {
            onCompleted();
        }
    };

    return (
        <TouchableOpacity 
            onPress={handlePress} 
            style={[styles.button, isCompleted ? styles.completed : null]}
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
        backgroundColor: 'red', // Red for not completed
    },
    completed: {
        backgroundColor: 'green', // Green for completed
    },
    habitName: {
        color: 'white',
        fontSize: 16,
    },
});

export default HabitButton;
