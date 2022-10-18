import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Avatar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 74.68 72.86" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={37}
            cy={36}
            rx={37}
            ry={36}
          ></Ellipse>
        </Svg>
        <View style={styles.group}>
          <ImageBackground
            
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.group1}>
              <Image
                
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </View>
          </ImageBackground>
        </View>
      </View>
      <Text style={styles.add}>Add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    top: 0,
    left: 1,
    width: 75,
    height: 73,
    position: "absolute"
  },
  group: {
    top: 0,
    left: 0,
    width: 76,
    height: 73,
    position: "absolute"
  },
  image: {
    height: 73,
    width: 76,
    borderRadius: 50,
    overflow: "hidden"
  },
  image_imageStyle: {},
  group1: {
    width: 76,
    height: 73
  },
  image1: {
    height: 73,
    width: 76,
    borderRadius: 50
  },
  ellipseStack: {
    width: 76,
    height: 73,
    marginLeft: -1
  },
  add: {
    fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.84,
    marginTop: 7,
    marginLeft: 23
  }
});

export default Avatar;
