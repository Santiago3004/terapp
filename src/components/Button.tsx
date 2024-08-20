// src/components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  title: string;
  customStyles?: {
    button?: object;
    buttonText?: object;
  };
};

const Button: React.FC<Props> = ({ title, customStyles, ...restProps }) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles?.button]} {...restProps}>
      <Text style={[styles.buttonText, customStyles?.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5C6BC0',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
