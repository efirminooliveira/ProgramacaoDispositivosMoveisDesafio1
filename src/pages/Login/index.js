
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperBotao';
import SuperButton2 from '../../components/SuperBotao2';
import Subtitulo from '../../components/Subtitulo';



export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <Titulo titulo="Login" />

      <MeuInput
        lablel="E-mail"
        placeholder="exemplo@exemplo.com" />

      <MeuInput
        lablel="Senha"
        placeholder="123456" />

      <SuperButton2
        valor="Esqueci minha senha">

      </SuperButton2>

      <SuperButton valor="Entrar"></SuperButton>

      <Subtitulo subtitulo=" Não tem uma conta?" />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}> Cadastre-se aqui!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89b1d9',
  },

  buttonText: {
    fontSize: 16,
    color: '#205285',
    textDecorationLine: 'underline'
  }

});

