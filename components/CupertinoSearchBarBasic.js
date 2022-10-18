import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoSearchBarBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputBox}>
        <Icon name="magnify" style={styles.inputLeftIcon}></Icon>
        <View  style={styles.inputStyle}>
        <TextInput
          placeholder={"Tìm kiếm"} 
          {...props}
         />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center", 
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    borderRadius: 5,
        alignItems: "center",
  },
  inputLeftIcon: {
    color: "#000",
    fontSize: 20, 
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 32, 
    fontSize: 15,
    lineHeight: 15,
    color: "#000",
    flex: 1
  }
});

export default CupertinoSearchBarBasic;
