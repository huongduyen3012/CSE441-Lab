import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

export default function HailstoneSequence1() {
    const [number, setNumber] = useState(0);
    let num = Number(number);
    let result = [];

    while (num !==1 && num !== 0) {
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = (num * 3) + 1;
        }
        result.push(num);
    }

    return (
        <View>
            <Text style={{ fontSize: 20, color: "black" }}>Input number: </Text>
            <TextInput style={{ fontSize: 20, color: "black", borderColor: 'gray', borderWidth: 1 }} value={number} keyboardType="numeric"
                onChangeText={text => (setNumber(text))}></TextInput>
            <Text style={{ fontSize: 20, color: "black" }}>The Hailstone Sequence is: {result.join(', ')}</Text>
        </View>
    )
};