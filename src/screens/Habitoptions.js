import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const options = [
  { id: 1, name: "Exercise" },
  { id: 2, name: "Read a Book" },
  { id: 3, name: "Drink Water" },
];

const Habitoptions = () => {
  const handleSelectOption = (optionName) => {
    console.log(`Selected option: ${optionName}`); 
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
  optionItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
  },
});

export default Habitoptions;
