import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ButtonComponent  from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ButtonComponent  
        title="Go to Habit options" 
        onPress={() => navigation.navigate('Habitoptions')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
