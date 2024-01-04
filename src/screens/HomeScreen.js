import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonComponent  from '../components/Button';
import HabitButton from '../components/HabitButton';

const HomeScreen = ({ navigation, route }) => {
  const [selectedHabits, setSelectedHabits] = useState([]);

  useEffect(() => {
    if (route.params?.selectedHabit && !selectedHabits.includes(route.params.selectedHabit)) {
      setSelectedHabits(prevHabits => [...prevHabits, route.params.selectedHabit]);
    }
  }, [route.params?.selectedHabit]);

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
          <HabitButton key={index} habitName={habit} />
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
