import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function Verificationcode(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 100.28 99.56" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="#f8c214"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          ></Ellipse>
        </Svg>
        <IoniconsIcon name="md-unlock" style={styles.icon}></IoniconsIcon>
      </View>
      <Text style={styles.nhapMaXacMinh}>NHẬP MÃ XÁC MINH</Text>
      <Text style={styles.text}>
        Mã xác minh đã được gửi tới số điện{"\n"}thoại của bạn. Nếu bạn không
        nhận{"\n"}được mã hãy bấm “Gửi lại mã{"\n"} xác minh” ở bên dưới.
      </Text>
      <Text style={styles.text2}>Bạn không có tài khoản ?</Text>
      <Text style={styles.dangKy}>ĐĂNG KÝ</Text>
      <EntypoIcon name="chevron-left" style={styles.icon4}></EntypoIcon>
      <Text style={styles.loremIpsum}></Text>
      <View style={styles.rectRow}>
        <View style={styles.rect}></View>
        <View style={styles.rect1}></View>
        <View style={styles.rect2}></View>
        <View style={styles.rect3}></View>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.xacNhan}>XÁC NHẬN</Text>
      </View>
      <Text style={styles.guiLaiMaXacMinh}>Gửi lại mã xác minh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 385,
    height: 721
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute"
  },
  icon: {
    top: 17,
    left: 31,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 60
  },
  ellipseStack: {
    width: 100,
    height: 100,
    marginTop: 55,
    marginLeft: 175
  },
  nhapMaXacMinh: {
    fontFamily: "mina-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 23,
    marginLeft: 107
  },
  text: {
    fontFamily: "roboto-regular",
    color: "rgba(162,156,156,1)",
    textAlign: "center",
    fontSize: 18,
    marginTop: 51,
    marginLeft: 79
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 428,
    marginLeft: 136
  },
  dangKy: {
    fontFamily: "roboto-700",
    color: "rgba(60,104,177,1)",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 183
  },
  icon4: {
    color: "rgba(8,8,8,1)",
    fontSize: 40,
    marginTop: -697,
    marginLeft: 53
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 248
  },
  rect: {
    width: 70,
    height: 70,
    backgroundColor: "#E6E6E6"
  },
  rect1: {
    width: 70,
    height: 70,
    backgroundColor: "#E6E6E6",
    marginLeft: 12
  },
  rect2: {
    width: 70,
    height: 70,
    backgroundColor: "#E6E6E6",
    marginLeft: 14
  },
  rect3: {
    width: 70,
    height: 70,
    backgroundColor: "#E6E6E6",
    marginLeft: 12
  },
  rectRow: {
    height: 70,
    flexDirection: "row",
    marginTop: 130,
    marginLeft: 66,
    marginRight: 1
  },
  rect4: {
    width: 319,
    height: 32,
    backgroundColor: "#3c68b1",
    borderRadius: 15,
    marginTop: 21,
    marginLeft: 66
  },
  xacNhan: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 4,
    marginLeft: 110
  },
  guiLaiMaXacMinh: {
    fontFamily: "roboto-regular",
    color: "rgba(242,12,41,1)",
    marginTop: 20,
    marginLeft: 164
  }
});

export default Verificationcode;
