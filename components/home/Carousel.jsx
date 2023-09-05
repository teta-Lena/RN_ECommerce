import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const MemoizedSliderBox = React.memo(SliderBox);

const Carousel = () => {
  const slides = [
    require("../../assets/images/fn1.jpg"),
    require("../../assets/images/fn2.jpg"),
    require("../../assets/images/fn3.jpg"),
  ];
  return (
    <View style={styles.carouselContainer}>
      <MemoizedSliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 2 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Carousel;
