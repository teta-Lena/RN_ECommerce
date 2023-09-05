import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { SIZES } from "../../constants";
const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New arrivals</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "medium",
    fontSize: SIZES.xLarge,
  },
});
