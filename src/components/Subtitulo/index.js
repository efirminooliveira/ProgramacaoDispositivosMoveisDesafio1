import React from "react";
import { Text, StyleSheet } from "react-native";


function Subtitulo(props) {
    return (
        <Text style={css.subtitulo}>{props.subtitulo}</Text>
    );
}

const css = StyleSheet.create({
    subtitulo: {
        color: '#205285',
        fontSize: 18,
        marginBottom: 1


    }
})

export default Subtitulo;