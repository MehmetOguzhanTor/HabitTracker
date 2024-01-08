import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HabitButton = ({ habitName, onCompleted, isCompleted }) => {
    const handlePress = () => {
        if (onCompleted) {
            onCompleted();
        }
    };

    return (
        <TouchableOpacity 
            onPress={handlePress} 
            style={[
                styles.button,
                isCompleted ? styles.completed : styles.notCompleted
            ]}
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
    },
    notCompleted: {
        backgroundColor: 'red', // Red for not completed
    },
    inProgress: {
        backgroundColor: 'blue', // Blue for in progress
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
