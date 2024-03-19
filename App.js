import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './src/pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        >
        </Stack.Screen>

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89b1d9',
    alignItems: 'center',
    justifyContent: 'center',
  }
});






