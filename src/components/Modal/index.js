import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
export const Modal = ({
  title,
  visible = false,
  closeModal = () => {},
  children,
  titleStyle,
}) => {
  return (
    <>
      {visible && (
        <View style={styles.container}>
          <Pressable
            onPress={() => closeModal(false)}
            style={styles.containerDark}
          />
          <View style={styles.boxModal}>
            <View style={styles.boxModalPadding}>
              <Text style={[styles.title, titleStyle]}>{title}</Text>
              {children}
            </View>
          </View>
        </View>
      )}
    </>
  );
};
