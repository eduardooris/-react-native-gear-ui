import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { correctSize } from "../../util/Size";
import { View } from "react-native";
import cssGlobal from "../../util/cssGlobal";

const ButtonStyle = {
  outline: styles.outlineButton,
  default: styles.defaultButton,
  dark: styles.darkButton,
  color: styles.colorButton,
  withIcon: styles.withIconButton,
  withIconLeft: styles.withIconButton,
};

export const ButtonDefault = ({
  type = "default",
  style,
  iconName = "menu",
  color,
  textStyle,
  onPress,
  disabled,
  children,
  onPressIn,
  onPressOut,
  textColor,
  colorIcon,
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        style={[
          { backgroundColor: color, borderColor: color },
          styles.container,
          ButtonStyle[type],
          style,
        ]}
      >
        {type == "withIconLeft" && (
          <MaterialIcons
            allowFontScaling={false}
            style={{ right: correctSize(5) }}
            name={iconName}
            color={colorIcon}
            size={cssGlobal.icon3}
          />
        )}
        <Text
          allowFontScaling={false}
          style={[{ color: textColor, fontFamily: "RobotoMedium" }, textStyle]}
        >
          {children}
        </Text>
        {type === "withIcon" && (
          <MaterialIcons
            allowFontScaling={false}
            style={{ left: correctSize(10) }}
            name={iconName}
            color={colorIcon}
            size={cssGlobal.icon3}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};
