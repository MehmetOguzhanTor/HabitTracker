import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const HabitButton = ({ habitName, onCompleted, isCompleted, onDelete }) => {
    const handlePress = () => {
        if (onCompleted) {
            onCompleted();
        }
    };

    const handleDelete = () => {
        Alert.alert(
            "Delete Habit",
            `Are you sure you want to delete the habit "${habitName}"?`,
            [
                {
                    text: "CANCEL",
                    style: "cancel"
                },
                { 
                    text: "YES", 
                    onPress: () => onDelete(habitName) 
                }
            ]
        );
    };
    
    return (
        <View style={styles.habitContainer}>
            <TouchableOpacity 
                onPress={onCompleted} 
                style={[
                    styles.button,
                    isCompleted ? styles.completed : styles.notCompleted
                ]}
            >
                <Text style={styles.habitName}>{habitName}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 15,
        margin: 10,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    habitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 15,
    },
    deleteButton: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default HabitButton;
