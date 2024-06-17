import { StyleSheet, Platform } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctSize } from "../../util/Size";
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: correctSize(25),
    borderRadius: correctSize(30),
    alignItems: "center",
    justifyContent: "center",
    height: correctSize(38),
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
  },
  outlineButtonText: {
    color: "#000",
  },
  defaultButton: {
    borderWidth: 2,
  },

  defaultButtonText: {
    color: cssGlobal.branco,
  },
  colorButton: {
    borderWidth: 2,
  },

  colorButtonText: {
    backgroundColor: cssGlobal.preto,
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
    borderWidth: 2,
  },
});
