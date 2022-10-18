import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function PictureComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.image1Row}>
        <Image
          source={require("../assets/baoanh12.jpg")}
          resizeMode="cover"
          style={styles.image1}
        ></Image>
        <Image
          source={require("../assets/baoanh7.jpg")}
          resizeMode="cover"
          style={styles.image2}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  image1: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
  image2: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginLeft: 29
  },
  image1Row: {
    height: 150,
    flexDirection: "row",
    flex: 1
  }
});

export default PictureComponent;
