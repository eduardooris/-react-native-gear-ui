import { StyleSheet } from "react-native";
import cssGlobal from "../../util/cssGlobal";
import { correctSize } from "../../util/Size";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: correctSize(18),
    paddingHorizontal: correctSize(30),
    backgroundColor: cssGlobal.grayLight,
  },
});
