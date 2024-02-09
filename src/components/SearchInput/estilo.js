//V2_1
import { StyleSheet, Platform } from "react-native";
import { correctSize } from "../../util/Size";
import cssGlobal from "../../util/cssGlobal";

export default estilo = StyleSheet.create({
  buscador: {
    backgroundColor: cssGlobal.branco,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: correctSize(15),
    paddingHorizontal: correctSize(15),
    paddingVertical: correctSize(13),
    borderRadius: correctSize(15),
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
});
