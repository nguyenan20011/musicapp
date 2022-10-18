import React, { Component } from "react";
import { StyleSheet, View, Image, Text,TouchableOpacity,ScrollView } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function User(props) {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.rect}>
      <TouchableOpacity onPress={()=>{
          props.navigation.navigate("HomeZatovi")}}>
        <EntypoIcon name="chevron-left" style={styles.icon1}></EntypoIcon>
      </TouchableOpacity>
        <Image
          source={require("../../assets/zyro-image.png")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Text style={styles.daiBang}>Đại Bàng</Text>
        <View style={styles.textRow}>
          <Text style={styles.text}>1.5M</Text>
          <Text style={styles.dangTheoDoi}>Đang theo dõi</Text>
          <Text style={styles.text2}>50</Text>
          <Text style={styles.theoDoi}>Theo dõi</Text>
        </View>
      </View>
      <View style={styles.group2}>
        <Text style={styles.hoSo}>Hồ sơ</Text>
        <View style={styles.icon3Row}>
          <EntypoIcon name="user" style={styles.icon3}></EntypoIcon>
          <Text style={styles.chinhSuaHoSo}>Chỉnh sửa hồ sơ</Text>
        </View>
        <View style={styles.icon4Row}>
          <MaterialCommunityIconsIcon
            name="onepassword"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.doiMatKhau}>Đổi mật khẩu</Text>
        </View>
        <Text style={styles.danhSach}>Danh sách</Text>
        <View style={styles.icon5Row}>
          <EntypoIcon name="users" style={styles.icon5}></EntypoIcon>
          <Text style={styles.text3}>Nghệ sĩ đang theo dõi</Text>
        </View>
      </View>
      <View style={styles.group}>
        <EntypoIcon name="log-out" style={styles.icon2}></EntypoIcon>
        <Text style={styles.dangXuat}>Đăng xuất</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 375,
    height: 300,
    backgroundColor: "rgba(60,104,177,1)",
    marginTop: 31
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  image: {
    width: 121,
    height: 120,
    borderRadius: 100,
    marginTop: 8,
    marginLeft: 127
  },
  daiBang: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 21,
    marginLeft: 127
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(247,194,20,1)",
    fontSize: 18,
    marginTop: 3
  },
  dangTheoDoi: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginLeft: 15,
    marginTop: 2
  },
  text2: {
    fontFamily: "roboto-700",
    color: "rgba(247,194,20,1)",
    fontSize: 18,
    marginLeft: 60
  },
  theoDoi: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginLeft: 12,
    marginTop: 2
  },
  textRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 31,
    marginRight: 31
  },
  group2: {
    width: 235,
    height: 302,
    marginTop: 18,
    marginLeft: 20
  },
  hoSo: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginLeft: 1
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  chinhSuaHoSo: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginLeft: 27,
    marginTop: 36
  },
  icon3Row: {
    height: 55,
    flexDirection: "row",
    marginTop: 33,
    marginRight: 42
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  doiMatKhau: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginLeft: 27,
    marginTop: 27
  },
  icon4Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 33,
    marginRight: 63
  },
  danhSach: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 7
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 50
  },
  text3: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16,
    marginLeft: 26,
    marginTop: 38
  },
  icon5Row: {
    height: 57,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 1
  },
  group: {
    width: 81,
    height: 77,
    marginTop: 39,
    marginLeft: 281
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    marginLeft: 16
  },
  dangXuat: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18
  }
});

export default User;
