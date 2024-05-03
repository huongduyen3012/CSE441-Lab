import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import style from "./style";

const App = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');

  const calculateTax = () => {
    const incomeAmount = parseFloat(income);

    if (isNaN(incomeAmount) || incomeAmount < 0) {
      setTax('Invalid income');
      return;
    }

    let taxAmount = 0;
    if (incomeAmount <= 10000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000) * 0.2;
    } else {
      taxAmount = 10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }

    setTax(`Income Tax: ${taxAmount.toFixed(2)}đ`);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Income Tax Calculator</Text>
      <TextInput
        textAlign="right" style={style.input}
        placeholder="Enter your income"
        keyboardType="numeric"
        value={income}
        onChangeText={text => setIncome(text)}
      />
      <TouchableOpacity style={style.Button} onPress={calculateTax}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>CALCULATE TAX</Text>
      </TouchableOpacity>
      <Text style={style.result}>{tax}</Text>
    </View>
  )
}

export default App;