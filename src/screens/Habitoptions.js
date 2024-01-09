import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native';
import IntervalModal from './IntervalModal';

const habitCategories = {
  'Health and Fitness': ['Exercise', 'Morning Stretching', 'Walk', 'Eat Healthy', 'Cycle', 'Swim', 'Work Out', 'Brush Your Teeth', ],
  'Personal Growth': ['Read', 'Write in Journal', 'Meditate', 'Limited Screen Time'],
  'Productivity': ['Complete Daily To-Do List', 'Study'],
  'Social and Family': ['Spend Time with Family', 'Connect with Friends', 'Express Gratitude'],
  'Leisure': ['Cooking', 'Outdoor Time', 'Watch a Movie'],
};

const Habitoptions = ({ navigation }) => {
  const [newHabit, setNewHabit] = useState('');
  const [expandedCategory, setExpandedCategory] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState('');

  const addNewHabit = () => {
    if (newHabit.trim() === '') return;
      setIsModalVisible(true);
      setSelectedHabit(newHabit.trim());
      setNewHabit('');
  };
  const handleIntervalConfirm = (reminderInterval, resetInterval) => {
    setIsModalVisible(false);
    navigation.navigate('Home', { selectedHabit, reminderInterval, resetInterval });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Please Choose or Add a Habit!</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new habit"
          value={newHabit}
          onChangeText={setNewHabit}
        />
        <Button title="Add" onPress={addNewHabit} />
      </View>

      {Object.entries(habitCategories).map(([category, habits]) => (
        <View key={category}>
          <TouchableOpacity onPress={() => setExpandedCategory(expandedCategory === category ? '' : category)}>
            <Text style={styles.category}>{category}</Text>
          </TouchableOpacity>
          {expandedCategory === category && habits.map((habit, index) => (
            <TouchableOpacity
            key={index}
            style={styles.optionItem}
            onPress={() => {
              setIsModalVisible(true);
              setSelectedHabit(habit);
            }}>
            <Text style={styles.optionText}>{habit}</Text>
          </TouchableOpacity>
          ))}
        </View>
      ))}
      <IntervalModal
        isVisible={isModalVisible}
        onConfirm={handleIntervalConfirm}
        onCancel={() => setIsModalVisible(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#f5f6fa', //soft grey
  },
  addButton: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: '#3498db', //Bright blue
    color: 'white',
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginTop: 15,
    shadowColor: '#2980b9', //Strong blue
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  optionItem: {
    backgroundColor: '#ecf0f1', //Light grayish cyan
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginVertical: 7,
    shadowColor: '#grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
  },
});


export default Habitoptions;
