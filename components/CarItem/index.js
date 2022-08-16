import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
      <StyledButton text="Custom Order" type="primary" onPress={() => {
        console.warn("Custom Order");
      }} />
      <StyledButton text="Existing Inventory" type="secondary" onPress={() => {
        console.warn("Existing Inventory");
      }} />
    </View>
  );
};

export default CarItem;
