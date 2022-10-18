import React, { Component } from "react";
import { StyleSheet, View, Image, Text,TextInput, ScrollView,TouchableOpacity } from "react-native";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


function Register(props) {
  return (
      <View style={[styles.container, props.style]}>
      <ScrollView>
      <View style ={styles.image}>
      <Image
        source={require("../assets/1._Logo_Zatovi.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      </View>
      
        <View style={styles.rect3}>
          <View style={styles.group}>
            <View style={styles.dangNhap1Row}> 
              <TouchableOpacity onPress={()=>{
              props.navigation.navigate("LoginSignup")}} >
              <Text style={styles.dangNhap}>ĐĂNG NHẬP</Text></TouchableOpacity>
              <Text style={styles.dangKy}>ĐĂNG KÝ</Text>
            </View>
          </View>  
         <View style={styles.group2}>
          <TextInput
           placeholder="  Tên tài khoản" 
           placeholderTextColor="#A29C9C" 
           style={styles.recttentk}></TextInput>
          <TextInput 
          placeholder="  Số điện thoại" 
          placeholderTextColor="#A29C9C" 
          style={styles.rectsdt}>
          </TextInput>
          <TextInput 
          placeholder="  Địa chỉ email" 
          placeholderTextColor="#A29C9C" 
          style={styles.rectemail}>
          </TextInput>
          <TextInput
          placeholder="  Mật khẩu" 
          placeholderTextColor="#A29C9C" 
          style={styles.rectmatkhau}>
          </TextInput>
          <TextInput 
          placeholder="  Nhật lại mật khẩu" 
          placeholderTextColor="#A29C9C" 
          style={styles.rectnlmatkhau}>
          </TextInput>
          <View style={styles.rect10}>
            <Text style={styles.taoTaiKhoan}>TẠO TÀI KHOẢN</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-bettween"
  },
group2: {
    width: "100%",
    flex:1,
    justifyContent:"center"
  },
  rect3: {
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 1,
    borderColor: "gray",
    overflow: "visible",
    justifyContent:"center"
    
  },
  group: {
    width: 282,
    height: 23,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 43
  },
  dangNhap: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    opacity:"80%"
  },
  dangKy: {
    fontFamily: "roboto-700",
    color: "#3c68b1",
    fontSize: 18,
    marginLeft: 103,
    marginTop: 1,
    opacity:"80%"
  },
  dangNhap1Row: {
    height: 23,
    flexDirection: "row",
    flex: 1,
    justifyContent:"center",
    alignContent:"center"
  },
  recttentk: {
    
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
    opacity:"80%"
  },
  
  rectsdt: {
    
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  
  rectemail: {
   
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
    
  },
  rectmatkhau: { 
    
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
    
  },

  rectnlmatkhau: {
    
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
    
  },
  rect10: {
     width: "100%",
    height: 36,
    backgroundColor: "#3c68b1",
    borderRadius: 16,
    marginTop: 12, 
    
  },
  taoTaiKhoan: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 23,
    textAlign:"center"
  },
  image1: {
    width: 215,
    height: 215,
    
  },
  image: {
    alignItems:"center",}
  
});

export default Register;
