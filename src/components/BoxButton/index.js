import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const BoxButton = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default BoxButton;
