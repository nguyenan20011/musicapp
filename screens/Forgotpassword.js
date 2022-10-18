import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import Svg, { Ellipse } from "react-native-svg";

function Forgotpassword(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.xacNhan1Stack}>
        <View style={styles.rect4}>
          <View style={styles.icon5Row}>
            <IoniconsIcon name="ios-mail" style={styles.icon5}></IoniconsIcon>
            <Text style={styles.guiEmail}>Gửi Email:</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.icon4Row}>
          <MaterialCommunityIconsIcon
            name="cellphone-android"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.guiSms}>Gửi SMS:</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>{
          props.navigation.navigate("LoginSignup")}}>
      <EntypoIcon name="chevron-left" style={styles.icon1}></EntypoIcon>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
          props.navigation.navigate("Register")}}>
      <Text style={styles.dangKy1}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
      <View>
      <Text style={styles.quenMatKhau}>QUÊN MẬT KHẨU</Text>
      <Text style={styles.text2}>
        Bạn hãy cung cấp địa chỉ email hoặc số{"\n"}điện thoại đã đăng ký của
        bạn để chúng{"\n"} tôi gửi mã xác minh cho bạn đặt lại mật khẩu
      </Text>
      <Text style={styles.text1}>Bạn không có tài khoản ?</Text>
      </View>
      <View style={styles.icon2Stack}>
        <Svg viewBox="0 0 100.28 99.56" style={styles.ellipse1}>
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
        <EvilIconsIcon name="lock" style={styles.iconlock}></EvilIconsIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1},
  rect4: {
    top: 0,
    left: 0,
    width: 326,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    flexDirection: "row"
  },
  icon5: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 55,
    width: 41
  },
  guiEmail: {
    fontFamily: "roboto-regular",
    color: "rgba(162,156,156,1)",
    fontSize: 16,
    marginLeft: 14
  },
  icon5Row: {
    height: 55,
    flexDirection: "row",
    flex: 1,
    marginRight: 185,
    marginLeft: 14,
    marginTop: 7
  },
  xacNhan1Stack: {
    width: 326,
    height: 82,
    marginTop: 415,
    marginLeft: 15
  },
  rect5: {
    width: 326,
    height: 70,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: -177,
    marginLeft: 15
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 54,
    width: 50
  },
  guiSms: {
    fontFamily: "roboto-regular",
    color: "rgba(162,156,156,1)",
    fontSize: 16,
    marginLeft: 8
  },
  icon4Row: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 193,
    marginLeft: 10,
    marginTop: 8
  },
  icon1: {
    color: "rgba(8,8,8,1)",
    fontSize: 40,
    marginTop: -390,
    marginLeft: 15
  },
  dangKy1: {
    fontFamily: "roboto-700",
    color: "rgba(60,104,177,1)",
    fontSize: 20,
    marginTop: 654,
    marginLeft: 146
  },
  text1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: -64,
    marginLeft: 99
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "rgba(162,156,156,1)",
    textAlign: "center",
    fontSize: 18,
    marginTop: -449
  },
  quenMatKhau: {
    fontFamily: "mina-700",
    color: "#121212",
    fontSize: 25,
    marginTop: -116,
    marginLeft: 88
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute"
  },
  iconlock: {
    
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
  },
  icon2Stack: {
    width: 100,
    height: 100,
    marginTop: -462,
    marginLeft: 138
  }
});

export default Forgotpassword;
