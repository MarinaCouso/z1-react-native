import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScreenTitle = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold',
  },
});

export { ScreenTitle };
