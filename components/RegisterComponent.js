import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.group}>
          <Text style={styles.dangKy1}>ĐĂNG KÝ</Text>
          <Text style={styles.dangNhap1}>ĐĂNG NHẬP</Text>
        </View>
        <View style={styles.rect11}>
          <FontAwesomeIcon name="user" style={styles.icon}></FontAwesomeIcon>
        </View>
        <View style={styles.rect6}>
          <FontAwesomeIcon name="phone" style={styles.icon2}></FontAwesomeIcon>
        </View>
        <View style={styles.rect7}>
          <IoniconsIcon name="ios-mail" style={styles.icon3}></IoniconsIcon>
        </View>
        <View style={styles.rect8}>
          <IoniconsIcon name="md-lock" style={styles.icon4}></IoniconsIcon>
        </View>
        <View style={styles.rect9}>
          <MaterialCommunityIconsIcon
            name="lock-alert"
            style={styles.icon5}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.rect10}>
          <Text style={styles.taoTaiKhoan}>TẠO TÀI KHOẢN</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 434
  },
  rect3: {
    width: 375,
    height: 434,
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 1,
    borderColor: "#000000",
    overflow: "visible"
  },
  group: {
    width: 282,
    height: 23,
    marginTop: 25,
    marginLeft: 43
  },
  dangKy1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 1,
    marginLeft: 206
  },
  dangNhap1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: -1
  },
  rect11: {
    width: 322,
    height: 32,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 28,
    marginLeft: 27
  },
  icon: {
    color: "rgba(247,194,20,1)",
    fontSize: 25,
    height: 0,
    width: 0,
    marginTop: 4,
    marginLeft: 16
  },
  rect6: {
    width: 322,
    height: 32,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 9,
    marginLeft: 27
  },
  icon2: {
    color: "rgba(247,194,20,1)",
    fontSize: 25,
    height: 0,
    width: 0,
    marginTop: 4,
    marginLeft: 15
  },
  rect7: {
    width: 322,
    height: 32,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 11,
    marginLeft: 27
  },
  icon3: {
    color: "rgba(247,194,20,1)",
    fontSize: 25,
    height: 0,
    width: 0,
    marginTop: 5,
    marginLeft: 14
  },
  rect8: {
    width: 322,
    height: 32,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 10,
    marginLeft: 27
  },
  icon4: {
    color: "rgba(247,194,20,1)",
    fontSize: 25,
    height: 0,
    width: 0,
    marginTop: 2,
    marginLeft: 16
  },
  rect9: {
    width: 322,
    height: 32,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 14,
    marginLeft: 27
  },
  icon5: {
    color: "rgba(247,194,20,1)",
    fontSize: 25,
    height: 0,
    width: 0,
    marginTop: 2,
    marginLeft: 12
  },
  rect10: {
    width: 178,
    height: 36,
    backgroundColor: "#3c68b1",
    borderRadius: 16,
    marginTop: 43,
    marginLeft: 94
  },
  taoTaiKhoan: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 23
  }
});

export default Index;
