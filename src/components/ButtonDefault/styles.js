import { StyleSheet, Platform } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctSize } from "../../util/Size";
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: correctSize(25),
    paddingVertical: correctSize(10),
    borderRadius: correctSize(30),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  outlineButton: {
    backgroundColor: cssGlobal.branco,
    borderWidth: 2,
    borderColor: "#000",
  },
  outlineButtonText: {
    color: "#000",
  },
  defaultButton: {
    backgroundColor: cssGlobal.branco,
    borderWidth: 2,
  },

  defaultButtonText: {
    color: cssGlobal.cinza,
  },
  colorButton: {
    backgroundColor: "#000",
    borderWidth: 2,
  },

  colorButtonText: {
    backgroundColor: "#000",
    color: cssGlobal.branco,
  },
  darkButton: {
    backgroundColor: cssGlobal.cinza,
    color: cssGlobal.branco,
    borderWidth: 2,
    borderColor: cssGlobal.cinza,
  },
  darkButtonText: {
    color: cssGlobal.branco,
  },
  withIconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    width: correctSize(100),
    borderWidth: 2,
  },
  withIconButtonText: {
    color: cssGlobal.branco,
  },
});
