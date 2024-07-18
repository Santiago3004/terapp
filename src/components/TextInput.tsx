// src/components/TextInput.tsx
import React from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from 'react-native';

type Props = TextInputProps;

const TextInput: React.FC<Props> = (props) => {
  return (
    <RNTextInput
      {...props}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: '#8A2BE2',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default TextInput;
