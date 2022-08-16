import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

interface CarItemProps {
  name: string;
  tagLine: string;
  image: string;
  tagLineCTA: string;
}

const CarItem = (props: CarItemProps) => {
  const { name, tagLine, image, tagLineCTA } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          text="Custom Order"
          type="primary"
          onPress={() => {
            console.warn("Custom Order");
          }}
        />
        <StyledButton
          text="Existing Inventory"
          type="secondary"
          onPress={() => {
            console.warn("Existing Inventory");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
