import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  const frases = [];
  frases[0] = 'O importante não é vencer todos os dias, mas lutar sempre.';
  frases[1] = 'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!';
  frases[2] = 'É melhor conquistar a si mesmo do que vencer mil batalhas.';
  frases[3] = 'Enquanto houver vontade de lutar haverá esperança de vencer.';
  frases[4] = 'Ser feliz sem motivo é a mais autêntica forma de felicidade.';

  const fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};

const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />

      <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
