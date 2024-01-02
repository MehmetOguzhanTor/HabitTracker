import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ButtonComponent  from '../components/Button';

const HomeScreen = ({ navigation, route }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);

  useEffect(() => {
    if (route.params?.selectedHabit) {
      setSelectedHabit(route.params.selectedHabit);
    }
  }, [route.params?.selectedHabit]);

  return (
    <View style={styles.container}>
      <ButtonComponent onPress={() => navigation.navigate('Habitoptions')}>
        <Text style={styles.plusStyle}>+</Text>
        <Text style={styles.buttonTextStyle}></Text>
        <Text style={styles.buttonTextStyle}>New Habit</Text>
      </ButtonComponent>
        {selectedHabit && (
        <Text style={styles.selectedHabitText}>
          Selected Habit: {route.params?.selectedHabit}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  plusStyle: {
    fontSize: 160, 
    color: 'white',
},
  selectedHabitText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  buttonTextStyle: {
    fontSize: 18,
  },
});

export default HomeScreen;
