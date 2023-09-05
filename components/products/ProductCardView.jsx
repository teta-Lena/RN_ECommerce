import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ProductCardView = () => {
  const image = require("../../assets/images/app.png"); // Import the image correctly
  const navigation = useNavigation();
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Product Details");
        }}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              Product name
            </Text>
            <Text style={styles.supplier}>Product</Text>
            <Text style={styles.price}>$230</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 185,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    flex: 1,
    width: 165,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});
