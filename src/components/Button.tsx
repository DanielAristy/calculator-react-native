import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles } from '../styles/styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

const Button = ({ title, onPress, isBlue, isGray }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={
        isBlue ? Styles.btnBlue : isGray ? Styles.btnGray : Styles.btnLight
      }
      onPress={onPress}>
      <Text style={Styles.smallTextLight}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
