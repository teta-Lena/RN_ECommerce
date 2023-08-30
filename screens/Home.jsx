import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import Welcome from "../components/home/Welcome";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.textStyle}>Kigali Rwanda</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  appBarWrapper: {
    marginHorizontal: 15,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: "900",
    alignItems: "center",
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: "10",
    color: COLORS.lightWhite,
  },
});
