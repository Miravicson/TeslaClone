import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem";
import CarsList from "./components/CarsList";

const car = {
  name: "Model 3",
  tagLine: "Order Online For",
  image: require("./assets/images/Model3.jpeg"),
  tagLineCTA: "Touchless Delivery",
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem car={car} /> */}
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
