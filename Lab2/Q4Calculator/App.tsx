import React, { useState } from "react";
import style from "./style";
import { View, Text, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFistValue] = useState('');

  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFistValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFistValue('');

  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFistValue('');
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={style.input}>{displayValue}</Text>
        </View>
        <View style={style.row}>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('7')}>
            <Text style={style.text}>7</Text></TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('8')}>
            <Text style={style.text}>8</Text></TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('9')}>
            <Text style={style.text}>9</Text></TouchableOpacity>
            <TouchableOpacity style={style.buttonOperator} onPress={() => handleOperatorInput('/')}>
            <Text style={style.text}>/</Text></TouchableOpacity>
 
        </View>

        <View style={style.row}>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('4')}>
            <Text style={style.text}>4</Text></TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('5')}>
            <Text style={style.text}>5</Text></TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('6')}>
            <Text style={style.text}>6</Text></TouchableOpacity>
          <TouchableOpacity style={style.buttonOperator} onPress={() => handleOperatorInput('*')}>
            <Text style={style.text}>*</Text></TouchableOpacity>
        </View>

        <View style={style.row}>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('1')}>
            <Text style={style.text}>1</Text></TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('2')}>
            <Text style={style.text}>2</Text></TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput('3')}>
            <Text style={style.text}>3</Text></TouchableOpacity>
          <TouchableOpacity style={style.buttonOperator} onPress={() => handleOperatorInput('-')}>
            <Text style={style.text}>-</Text></TouchableOpacity>
        </View>

        <View style={style.row}>
          <TouchableOpacity style={style.button0} onPress={() => handleNumberInput('0')}>
            <Text style={style.text}>0</Text></TouchableOpacity>
          <TouchableOpacity style={style.buttonOperator} onPress={() => handleOperatorInput('+')}>
            <Text style={style.text}>+</Text></TouchableOpacity>
            <TouchableOpacity style={style.buttonOperator} onPress={handleEqual}>
            <Text style={style.text}>=</Text></TouchableOpacity>
        </View>

        <View style={style.row}>
        <TouchableOpacity style={style.buttonClear} onPress={handleClear}>
            <Text style={style.text}>C</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

export default Calculator;