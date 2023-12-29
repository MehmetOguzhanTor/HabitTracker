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
      <ButtonComponent  
        title="Go to Habit options" 
        onPress={() => navigation.navigate('Habitoptions')} 
      />
      {selectedHabit && (
        <Text style={styles.selectedHabitText}>
          Selected Habit: {route.params?.selectedHabit}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedHabitText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default HomeScreen;
