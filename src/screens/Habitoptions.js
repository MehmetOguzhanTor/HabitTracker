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
    if (newHabit.trim() === '') return; // Prevent adding empty habits

    const newId = options.length + 1;
    setOptions([...options, { id: newId, name: newHabit }]);
    setNewHabit(''); // Reset the input field
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
      <Text style={styles.header}>Welcome to Habit Options!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new habit"
          value={newHabit}
          onChangeText={setNewHabit}
        />
        <Button title="Add" onPress={addNewHabit} />
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
  optionItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 18,
  },
});

export default Habitoptions;
