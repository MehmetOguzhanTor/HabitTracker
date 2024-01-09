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
      const reminderInterval = route.params.reminderInterval || 60;
      const resetInterval = route.params.resetInterval || 60;
      const newHabit = { 
        name: route.params.selectedHabit, 
        completed: false, 
        selectedAt: new Date().getTime(),
        reminderInterval,
        resetInterval
      };
      if (!selectedHabits.some(habit => habit.name === newHabit.name)) {
        scheduleNotification(newHabit).then(notificationId => {
          setSelectedHabits(prevHabits => [...prevHabits, { ...newHabit, notificationId }]);
        });
      }
    }

    const intervalId = setInterval(() => {
      resetHabitStatus();
    }, 10000); // Check every 10 seconds
  
    return () => clearInterval(intervalId);

  }, [route.params?.selectedHabit, route.params?.reminderInterval, route.params?.resetInterval]);

  const isHabitInProgress = (habitName) => {
    return false; 
  };

  const deleteHabit = (habitName) => {
    setSelectedHabits(prevHabits => prevHabits.filter(habit => habit.name !== habitName));
  };

  const scheduleNotification = async (habit) => {
  if (!habit.completed) {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Habit Reminder",
        body: `Don't forget to complete your habit: ${habit.name}`,
      },
      trigger: { 
        seconds: habit.reminderInterval *60,
        repeats: true
      },
    });
    return notificationId;
  }
};

const markHabitAsCompleted = (habitName) => {
  setSelectedHabits(prevHabits =>
    prevHabits.map(habit => {
      if (habit.name === habitName) {
        cancelNotification(habit.notificationId);
        return { ...habit, completed: !habit.completed };
      }
      return habit;
    })
  );
};

  const resetHabitStatus = () => {
    const currentTime = new Date().getTime();
  
    setSelectedHabits(prevHabits =>
      prevHabits.map(habit => {
        if (currentTime - habit.selectedAt > habit.resetInterval*60*1000) {
          return { ...habit, completed: false, selectedAt: currentTime }; // Reset and update the timestamp
        }
        return habit;
      })
    );
  };

  const cancelNotification = async (notificationId) => {
    if (notificationId) {
      await Notifications.cancelScheduledNotificationAsync(notificationId);
    }
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
          <HabitButton 
            key={index} 
            habitName={habit.name}
            isCompleted={habit.completed}
            onCompleted={() => markHabitAsCompleted(habit.name)}
            onDelete={deleteHabit}
          />
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
