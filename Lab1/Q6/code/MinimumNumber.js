import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
;

const MinimumNumber = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [minNumber, setMinNumber] = useState('');

    const findMinimumNumber = () => {
        const num1 = parseInt(number1);
        const num2 = parseInt(number2);
        const num3 = parseInt(number3);
        const min = Math.min(num1, num2, num3);
        setMinNumber(min);
        Alert.alert("The minimum number is: " + minNumber)
    };

    return (
        <View>
            <Text style={{ fontSize: 20, color:"black" }}>Number 1: </Text>
            <TextInput style={{ fontSize: 20, color: "black", borderColor: 'gray', borderWidth: 1 }} value={number1}
                onChangeText={text => (setNumber1(text))}></TextInput>
            <Text style={{ fontSize: 20, color: "black" }}>Number 2: </Text>
            <TextInput style={{ fontSize: 20, color: "black", borderColor: 'gray', borderWidth: 1 }} value={number2}
                onChangeText={text => (setNumber2(text))}></TextInput>
            <Text style={{ fontSize: 20, color: "black" }}>Number 3: </Text>
            <TextInput style={{ fontSize: 20, color: "black", borderColor: 'gray', borderWidth: 1 }} value={number3}
                onChangeText={text => (setNumber3(text))}></TextInput>
            <Button onPress={findMinimumNumber} title="Show Result"></Button>
        </View>
    )
}

export default MinimumNumber;