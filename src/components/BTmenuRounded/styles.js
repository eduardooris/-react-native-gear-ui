import { StyleSheet, Platform } from "react-native";
import { correctSize } from "../../util/Size";

export const styles = StyleSheet.create({
  container: {
    borderRadius: correctSize(100),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: correctSize(7),
    width: correctSize(65),
    height: correctSize(65),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: correctSize(2),
    borderRadius: 50,
    width: correctSize(60),
    height: correctSize(60),
  },
});
