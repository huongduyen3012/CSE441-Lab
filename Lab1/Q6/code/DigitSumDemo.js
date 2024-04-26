import React, { useState } from "react";
import Sumdigit from "./DigitSum";
import { View, TextInput, Text } from "react-native";

export function DigitSumDemo() {
    const [number, setNumber] = useState('');
    return (
        <View>
            <Text style={{ fontSize: 30, color: "black" }}>Input number: </Text>
            <TextInput style={{ fontSize: 30, color: "black", borderColor: 'gray', borderWidth: 1 }} value={number}
                onChangeText={text => (setNumber(text))}></TextInput>
            <Sumdigit number={number} />
        </View>
    );
}

