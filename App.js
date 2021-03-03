import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenTitle } from './components/TextComponents';

export default function App() {
  return (
    <View style={styles.container}>
      <ScreenTitle text='Learn' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
  },
});
