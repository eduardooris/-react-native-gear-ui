import React from "react";
import { TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { correctFontSizeForScreen } from "../../util/FontSize";
import { styles } from "./styles";

const sizes = {
  sm: correctFontSizeForScreen(10),
  md: correctFontSizeForScreen(17),
};

export const BTmenuRounded = ({
  size,
  icon,
  color,
  onPress = () => console.log("button"),
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.subContainer, { borderColor: color }]}
      >
        <MaterialIcons name={icon} size={sizes[size]} color={color} />
      </TouchableOpacity>
    </View>
  );
};

