import { StyleSheet, Platform } from "react-native";
import { correctSize } from "../../util/Size";
export const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  BTmenuGeral: {
    backgroundColor: "#FFF",
    padding: correctSize(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: correctSize(15),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
