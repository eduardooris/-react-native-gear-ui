//V2_1
import React from 'react';
import { View, TextInput } from 'react-native';
import estilo from './estilo';
const SearchInput = (props) => {
  const { value, onChangeText = () => {}, placeholder } = props;
  return (
    <View style={estilo.buscador}>
      <TextInput
        placeholder={placeholder}
        style={{ flex: 1 }}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export { SearchInput };
