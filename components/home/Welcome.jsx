import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants/index";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black)}>Find the most</Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, marginHorizontal) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 5,
    marginTop: SIZES.xSmall,
    color: color,
    marginHorizontal: 12,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
  },
});
