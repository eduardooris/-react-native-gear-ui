import React from 'react';
import { View, Switch, Text } from 'react-native';
import cssGlobal from '../../util/cssGlobal';
import { styles } from './styles';
const BTswitchList = ({ title, onValueChange, value }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Switch
          style={{ transform: [{ scale: 0.8 }] }}
          trackColor={{
            false: cssGlobal.cinza,
            true: cssGlobal.cinza,
          }}
          thumbColor={true ? cssGlobal.branco : cssGlobal.branco}
          value={value}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  );
};

export { BTswitchList };
