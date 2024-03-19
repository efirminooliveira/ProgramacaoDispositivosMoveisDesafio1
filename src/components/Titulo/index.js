import React from "react";
import { Text, StyleSheet } from "react-native";


function Titulo(props) {
    return (
        <Text style={css.titulo}>{props.titulo}</Text>
    );
}

const css = StyleSheet.create({
    titulo: {
        color: '#205285',
        fontSize: 70,
        marginBottom: 20

    }
})

export default Titulo;