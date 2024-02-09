import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
const BTphoto = ({ source, onPress, disabled, title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.containerImage}>
        <Image source={source} style={styles.image} />
      </TouchableOpacity>
      {title && (
        <View style={styles.containerName}>
          <Text numberOfLines={1} style={styles.txtName}>
            {title}
          </Text>
        </View>
      )}
    </View>
  );
};

export { BTphoto };
