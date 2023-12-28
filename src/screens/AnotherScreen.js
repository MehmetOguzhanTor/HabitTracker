import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Another Screen!</Text>
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

export default AnotherScreen;
