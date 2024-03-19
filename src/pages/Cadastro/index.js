import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MeuInput from "../../components/Input";

function Cadastro() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastre-se aqui para criar sua conta</Text>

      <MeuInput
        lablel="Nome Completo"
        placeholder="Maria" />


      <MeuInput
        lablel="E-mail"
        placeholder="exemplo@exemplo.com" />

      <MeuInput
        lablel="Senha"
        placeholder="123456" />

      <MeuInput
        lablel="Confirme sua Senha"
        placeholder="123456" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBotton: 100,
    backgroundColor: '#89b1d9',


  },

  text: {

    fontSize: 19,
    color: '#205285',
    marginBottom: 30,
  }

});

export default Cadastro;
