import { StyleSheet } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctFontSizeForScreen } from "../../util/FontSize";
import { correctSize } from "../../util/Size";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    width: correctSize(110),
    height: correctSize(110),
    borderRadius: 100,
    backgroundColor: cssGlobal.branco,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: correctSize(100),
    height: correctSize(100),
    borderRadius: 100,
    resizeMode: "contain",
  },
  txtName: {
    fontSize: correctFontSizeForScreen(8),
    color: cssGlobal.cinza,
    width: correctSize(112),
    textAlign: "center",
  },
  containerName: {
    paddingTop: correctSize(10),
  },
});
