import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';

const Habitoptions = ({ navigation }) => {
  const [options, setOptions] = useState([
    { id: 1, name: "Exercise" },
    { id: 2, name: "Read a Book" },
    { id: 3, name: "Drink Water" },
  ]);
  const [newHabit, setNewHabit] = useState('');

  const handleSelectOption = (option) => {
    navigation.navigate('Home', { selectedHabit: option });
  };

  const addNewHabit = () => {
    if (newHabit.trim() === '') return;

    const newId = options.length + 1;
    setOptions([...options, { id: newId, name: newHabit }]);
    setNewHabit('');
  };
  
  const renderOptionItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.optionItem} 
      onPress={() => handleSelectOption(item.name)}
    >
      <Text style={styles.optionText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please Choose or Add a
       Habit!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new habit"
          value={newHabit}
          onChangeText={setNewHabit}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNewHabit}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={options}
        renderItem={renderOptionItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    borderColor: '#7f8c8d',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: 'white',
    shadowColor: '#2c3e50',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
  },
});

export default Habitoptions;
