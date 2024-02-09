import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Badge } from 'react-native-elements';
const BoxButton = ({
  textPrimaryButton,
  textSecondButton,
  onPressPrimaryButton,
  onPressSecondButton,
  children,
  secondBadgeValue,
  primarydBadgeValue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAlerts}>{children}</View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={onPressPrimaryButton} style={styles.button}>
          <Text style={styles.txtButton}>{textPrimaryButton}</Text>
          {primarydBadgeValue && (
            <Badge
              value={primarydBadgeValue}
              status="error"
              badgeStyle={{ transform: [{ scale: 1 }] }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressSecondButton} style={styles.button}>
          <Text style={styles.txtButton}>{textSecondButton}</Text>
          {secondBadgeValue && (
            <Badge
              value={secondBadgeValue}
              status="error"
              badgeStyle={{ transform: [{ scale: 1 }] }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { BoxButton };
