import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  container: {
    width: "100%",
    padding: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  typeStyle: {
    primary: StyleSheet.create({
      button: {
        backgroundColor: "#171A20CC",
      },
      text: {
        color: "#FFFFFF",
      }
    }),
    secondary: StyleSheet.create({
      button: {
        backgroundColor: "#FFFFFFA6",
      },
      text: {
        color: "#171A20",
      }
    })
  },
});

export default styles;
