import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { correctSize } from '../../util/Size';

const ButtonStyleText = {
  outline: styles.outlineButtonText,
  default: styles.defaultButtonText,
  dark: styles.darkButtonText,
  color: styles.colorButtonText,
  withIcon: styles.withIconButtonText,
};

const ButtonStyle = {
  outline: styles.outlineButton,
  default: styles.defaultButton,
  dark: styles.darkButton,
  color: styles.colorButton,
  withIcon: styles.withIconButton,
};

export const ButtonDefault = (props) => {
  const { type = 'default', style, iconName = 'menu', color } = props;

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, ButtonStyle[type], style]}
    >
      <Text style={ButtonStyleText[type]}>{props.children}</Text>
      {type === 'withIcon' && (
        <MaterialIcons
          style={{ left: correctSize(10) }}
          name={iconName}
          color={color}
          size={correctSize(15)}
        />
      )}
    </TouchableOpacity>
  );
};
