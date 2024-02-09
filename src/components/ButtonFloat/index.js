import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const ButtonFloat = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>{props.children}</View>
    </View>
  );
};

export { ButtonFloat };
