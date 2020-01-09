//era pra ser o index.android.js

import React from 'react';
import {Text, View, Button, AppRegistry, Image} from 'react-native'; //as variaveis recebem a respectiva propriedade do módulo react-native
//o view funciona como um conteiner para os elementos

//funcionalidade do button
const geraNumeroAleatorio = () => {
    var numero_aleatorio = Math.random();
    numero_aleatorio = Math.floor((numero_aleatorio * 10)); //retorna um numero inteiro entre 0 e 10
    alert(numero_aleatorio);
};

const App = () => {
    return (
        <View>
            <Text>Gerador de Números Randômicos</Text>
            <Button
                title = "Gerar um número randômico"
                onPress = {geraNumeroAleatorio}
            />
            <Image source={require('./imgs/Yoda.png')} />
        </View>
    );
};

AppRegistry.registerComponent('NumerosRandomicos', () => App); //função anônima que será executada na sequência da função registerComponente
