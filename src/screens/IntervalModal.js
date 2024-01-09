import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IntervalModal = ({ isVisible, onConfirm, onCancel }) => {
  const [reminderInterval, setReminderInterval] = useState('');
  const [resetInterval, setResetInterval] = useState('');

  const handleConfirm = () => {
    const reminderIntervalNum = parseInt(reminderInterval);
    const resetIntervalNum = parseInt(resetInterval);
    if (!isNaN(reminderIntervalNum) && reminderIntervalNum > 0 &&
        !isNaN(resetIntervalNum) && resetIntervalNum > 0) {
      onConfirm(reminderIntervalNum, resetIntervalNum);
    } else {
      alert('Please enter valid numbers');
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Set Reminder Interval (in minutes):</Text>
          <TextInput
            style={styles.input}
            onChangeText={setReminderInterval}
            value={reminderInterval}
            keyboardType="numeric"
          />
          <Text>Set Reset Interval (in minutes):</Text>
          <TextInput
            style={styles.input}
            onChangeText={setResetInterval}
            value={resetInterval}
            keyboardType="numeric"
          />
          <Button title="Confirm" onPress={handleConfirm} />
          <Button title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  }
});

export default IntervalModal;
