import { Platform, StyleSheet } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctFontSizeForScreen } from "../../util/FontSize";
import { correctSize } from "../../util/Size";

export const styles = StyleSheet.create({
  container: {
    width: correctSize(170),
    height: correctSize(200),
    backgroundColor: cssGlobal.branco,
    padding: correctSize(8),
    marginVertical: correctSize(4),
    borderRadius: correctSize(10),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0.9,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: correctSize(154),
    height: correctSize(70),
    borderRadius: correctSize(10),
    resizeMode: "contain",
  },
  txtTitle: {
    fontSize: correctFontSizeForScreen(9),
    paddingVertical: correctSize(5),
  },
  txtDescription: {
    fontSize: correctFontSizeForScreen(5.9),
    color: cssGlobal.cinza,
    height: correctSize(100),
    width: correctSize(150),
  },
});
