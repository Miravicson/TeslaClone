import { View, Image, Text } from "react-native";
import React from "react";
import styles from "./styles";
const logo = require("../../assets/images/logo.png");
const menu = require("../../assets/images/menu.png");

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={menu} style={styles.menu} />
    </View>
  );
};

export default Header;
