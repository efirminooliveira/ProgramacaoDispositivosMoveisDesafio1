import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function CriarConta() {

  const navigation = useNavigation();
  return (
    <View>

      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('Cadastro')}>

      </Button>
    </View>
  );

}

const styles = StyleSheet.create({
  Button: {
    alignItems: 'center',
    padding: 12,
  },
});

export default CriarConta;