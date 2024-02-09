import { StyleSheet, Platform } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctFontSizeForScreen } from "../../util/FontSize";
import { correctSize } from "../../util/Size";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cssGlobal.grayLight,
    padding: correctSize(3),
    borderRadius: correctSize(10),
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
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 1.5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    paddingVertical: correctSize(18),
    borderRadius: correctSize(7),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cssGlobal.branco,
    flex: 1,
    margin: correctSize(2),
  },
  containerAlerts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: correctSize(150),
    padding: correctSize(5),
  },
  txtButton: {
    textAlign: "center",
    fontSize: correctFontSizeForScreen(8),
    fontFamily: "RobotoMedium",
    color: cssGlobal.cinza,
    marginRight: correctSize(10),
  },
});
