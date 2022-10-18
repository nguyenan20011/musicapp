import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Box(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="bowl" style={styles.icon}></Icon>
      <Text style={styles.paySomeone}>Pay someone</Text>
      <Text style={styles.loremIpsum}>
        To wallet, bank or {"\n"}your number
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 8
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 31,
    marginLeft: 8
  },
  paySomeone: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 8,
    marginLeft: 8
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    marginLeft: 8
  }
});

export default Box;
