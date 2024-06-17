import { StyleSheet } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctSize } from "../../util/Size";
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    flexDirection: "row",
  },
  containerDark: {
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.9,
    width: "100%",
    height: "100%",
  },
  boxModal: {
    width: correctSize(350),
    backgroundColor: cssGlobal.branco,
    borderRadius: correctSize(25),
  },
  boxModalPadding: {
    backgroundColor: cssGlobal.grayLight,
    margin: correctSize(10),
    borderRadius: correctSize(25),
    paddingBottom: correctSize(25),
    paddingHorizontal: correctSize(20),
    justifyContent: "space-between",
  },
  containerButton: {
    alignItems: "center",
  },
  title: {
    fontSize: correctSize(17),
    fontFamily: "RobotoBold",
    marginTop: correctSize(20),
    marginBottom: correctSize(10),
  },
  text: {
    fontSize: correctSize(13),
    fontFamily: "RobotoRegular",
    color: cssGlobal.cinza,
    height: correctSize(140),
  },
});
