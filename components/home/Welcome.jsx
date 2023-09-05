import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Welcome = ({}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.welcomeText(COLORS.black)}>Find the most</Text>
          <Text style={styles.welcomeText(COLORS.primary, 0)}>
            Luxurious Furniture
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onPressIn={() => {
                navigation.navigate("Search");
              }}
              placeholder="What are you looking for"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons
                name="camera-outline"
                size={SIZES.xLarge}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, marginHorizontal) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 20,
    textAlign: "center",
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
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    paddingHorizontal: SIZES.small,
    height: "100%",
    width: "100%",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
});
