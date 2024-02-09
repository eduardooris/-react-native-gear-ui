import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
const CardImageScroll = ({ source, title, description, onPress }) => {
  if (description?.length > 132) {
    console.error('O texto da descrição não pode ter mais de 100 caracteres');
  }

  if (title?.length > 18) {
    console.error('O texto do título não pode ter mais de 30 caracteres');
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} />
      </View>
      <View style={styles.containerDescription}>
        <Text numberOfLines={1} style={styles.txtTitle}>
          {title}
        </Text>
        <Text numberOfLines={5} style={styles.txtDescription}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { CardImageScroll };
