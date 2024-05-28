import { StyleSheet, Platform } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctSize } from "../../util/Size";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cssGlobal.grayLight,
    borderRadius: correctSize(10),
    padding: correctSize(3),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.14,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
