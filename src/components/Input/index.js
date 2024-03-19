import React from "react";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";

function MeuInput(props) {
    return (
        <SafeAreaView>

            <Text>
                {props.lablel}
            </Text>

            <TextInput
                style={style.input}
                placeholder={props.placeholder}>

            </TextInput>

        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 50,
        marginBottom: 20,
        marginTop: 3,
        padding: 12,
        width: 330
    }
})

export default MeuInput;
