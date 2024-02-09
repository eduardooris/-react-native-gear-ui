import { StyleSheet, Platform } from "react-native";
import { correctSize } from "../../util/Size";
import cssGlobal from "../../util/cssGlobal";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: cssGlobal.grayLight,
    position: "absolute",
    bottom: correctSize(30),
    borderRadius: correctSize(100),
    height: correctSize(80),
    alignItems: "center",
    justifyContent: "center",
    padding: correctSize(5),
    marginHorizontal: correctSize(25),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  containerButton: {
    backgroundColor: cssGlobal.branco,
    flex: 1,
    width: "100%",
    borderRadius: correctSize(100),
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
