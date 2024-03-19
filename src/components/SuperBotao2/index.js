import React from "react";
import { TouchableHighlight, StyleSheet, Text, View, } from "react-native";

const SuperButton2 = (props) => {
    return (
        <TouchableHighlight
            style={style.SuperButton2}>

            <View style={style.button}>

                <Text style={style.valor}>{props.valor}</Text>

            </View>

        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    SuperButton: {

    },

    button: {

        alignItems: 'center',
        backgroundColor: '#89b1d9',
        padding: 10,
        width: 700,
        marginLeft: 200
    },

    valor: {
        fontSize: 15,
        color: '#205285',
        textDecorationLine: 'underline'
    }

});

export default SuperButton2;

