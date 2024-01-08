import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonComponent  from '../components/Button';
import HabitButton from '../components/HabitButton';
import * as Notifications from 'expo-notifications';

const HomeScreen = ({ navigation, route }) => {
  const [selectedHabits, setSelectedHabits] = useState([]);

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Please enable notifications to use this feature');
      }
    }

    requestPermissions();

    if (route.params?.selectedHabit) {
      const newHabit = { name: route.params.selectedHabit, completed: false };
      if (!selectedHabits.some(habit => habit.name === newHabit.name)) {
        setSelectedHabits(prevHabits => [...prevHabits, newHabit]);
        scheduleNotification(newHabit); 
      }
    }
  }, [route.params?.selectedHabit]);

  const scheduleNotification = async (habit) => {
    if (!habit.completed) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Habit Reminder",
          body: `Don't forget to complete your habit: ${habit.name}`,
        },
        trigger: { 
        seconds: 60,
        repeats: true
        },
        
      });
    }
  };

  const markHabitAsCompleted = (habitName) => {
    setSelectedHabits(prevHabits =>
      prevHabits.map(habit =>
        habit.name === habitName ? { ...habit, completed: true } : habit
      )
    );
  };

  return (
    <View style={styles.container}>
      <ButtonComponent onPress={() => navigation.navigate('Habitoptions')}>
        <Text style={styles.plusStyle}>+</Text>
        <Text style={styles.buttonTextStyle}></Text>
        <Text style={styles.buttonTextStyle}>New Habit</Text>
      </ButtonComponent>
      <ScrollView style={styles.habitsList}>
      <Text style={styles.buttonTextStyle}></Text>
      <Text style={styles.buttonTextStyle}></Text>
        {selectedHabits.map((habit, index) => (
          <HabitButton key={index} habitName={habit.name} onCompleted={() => markHabitAsCompleted(habit.name)} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 20, 
},
  plusStyle: {
    marginTop: 5,
    fontSize: 160, 
    alignItems: 'center',
    color: 'white',
},
  selectedHabitText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'blue',
  },
  habitsList: {
    width: '100%', 
  },
});

export default HomeScreen;
