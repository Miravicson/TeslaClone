import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

interface StyledButtonProps {
  type: "primary" | "secondary",
  text: string,
  onPress: () => void,
};

const StyledButton = (props: StyledButtonProps) => {
  const { type, text, onPress } = props;
  const typeStyle =
    type === "primary" ? styles.typeStyle.primary : styles.typeStyle.secondary;
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, typeStyle.button]}
        onPress={onPress}
      >
        <Text style={[styles.text, typeStyle.text]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
