import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../styles/styles';
import Button from './Button';

const KeyBoard = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
  };

  const resultOperation = () => {
    switch (operation) {
      case '+':
        clear();
        setFirstNumber(
          (parseInt(secondNumber) + parseInt(firstNumber)).toString(),
        );
        break;
      case '-':
        clear();
        setFirstNumber(
          (parseInt(secondNumber) - parseInt(firstNumber)).toString(),
        );
        break;
      case 'x':
        clear();
        setFirstNumber(
          (parseInt(secondNumber) * parseInt(firstNumber)).toString(),
        );
        break;
      case '÷':
        clear();
        setFirstNumber(
          (parseInt(secondNumber) / parseInt(firstNumber)).toString(),
        );
        break;
    }
  };
  return (
    <View style={(Styles.container, Styles.viewBottom)}>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}>
        <Text style={Styles.screenSecondNumber}>
          <Text>
            {secondNumber}
            {operation}
            {firstNumber}
          </Text>
        </Text>
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => handleOperationPress('+/-')}
        />
        <Button title="%" isGray onPress={() => handleOperationPress('%')} />
        <Button title="÷" isBlue onPress={() => handleOperationPress('÷')} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress('7')} />
        <Button title="8" onPress={() => handleNumberPress('8')} />
        <Button title="9" onPress={() => handleNumberPress('9')} />
        <Button title="x" isBlue onPress={() => handleOperationPress('x')} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress('4')} />
        <Button title="5" onPress={() => handleNumberPress('5')} />
        <Button title="6" onPress={() => handleNumberPress('6')} />
        <Button title="-" isBlue onPress={() => handleOperationPress('-')} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress('1')} />
        <Button title="2" onPress={() => handleNumberPress('2')} />
        <Button title="3" onPress={() => handleNumberPress('3')} />
        <Button title="+" isBlue onPress={() => handleOperationPress('+')} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleOperationPress('.')} />
        <Button title="0" onPress={() => handleNumberPress('0')} />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => resultOperation()} />
      </View>
    </View>
  );
};

export default KeyBoard;
