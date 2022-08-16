import { Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import cars from "./cars";
import styles from "./styles";
import CarItem from "../CarItem";

const CarsList = (props) => {
  const renderItem = ({ item }) => <CarItem car={item} />;
  const keyExtractor = (item) => item.name;
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        snapToAlignment={"start"}
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
