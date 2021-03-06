import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
        <StatusBar style='light' />
      </NavigationContainer>
    </ApolloProvider>
  );
}
