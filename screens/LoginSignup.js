import React, { Component } from "react";
import { StyleSheet, View, Image, Text,TouchableOpacity, SafeAreaView,TextInput } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

function LoginSignup(props) {
  return (
    <View style={styles.container}>
    
      <View style={[styles.container, props.style]}>
      <View style={styles.image}>
      <Image
        source={require("../assets/1._Logo_Zatovi.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      </View>
      <View style={styles.rect}>
      <View style={styles.group}>
        <View style={styles.dangNhapRow}>
          <Text style={styles.dangNhap}>ĐĂNG NHẬP</Text>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate("Register")
          }} style={styles.dangNhap}>
          <Text style={styles.dangKy}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
        </View>
        </View>
        <Text style={styles.tenDangNhap}>Tên đăng nhập</Text>
        <View style={styles.userNameContainer}>
        <TextInput style={styles.rect2}></TextInput>
        </View>
        
        <Text style={styles.matKhau}>Mật khẩu</Text>
        <View style={styles.passwordContainer}>
        <TextInput
        secureTextEntry={true}  
        style={styles.rectMatkhau} >
        </TextInput>
        </View>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate("Forgotpassword")}}>
        <Text style={styles.quenMatKhau}>Quên mật khẩu ?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
         props.navigation.navigate("HomeTab")
          }} style={styles.rect4}>
          <Text style={styles.dangNhap1}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <Text style={styles.hoac}>Hoặc</Text>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={()=>{
         props.navigation.navigate("BottomSheetSrceen")
          }}>
          <EntypoIcon
            name="facebook-with-circle"
            style={styles.icon}
          ></EntypoIcon>
          </TouchableOpacity>
          <EntypoIcon
            name="google--with-circle"
            style={styles.icon2}
          ></EntypoIcon>
          <EntypoIcon
            name="twitter-with-circle"
            style={styles.icon3}
          ></EntypoIcon>
        </View>
      </View>
    </View>
    <SafeAreaView/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image1: {
    width: 215,
    height: 215,
    
  },
  image: {
    alignItems:"center",
  },
  group:{
    width:"100%",
    alignContent:"center"
  },
  rect: {
    padding:16,
    backgroundColor: "rgba(255,255,255,1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 1,
    borderColor: "#000000",
    overflow: "visible",
    marginTop: 14,
    justifyContent:"center"
    
  },
  
  dangNhap: {
    fontFamily: "roboto-700",
    color: "#3c68b1",
    fontSize: 18,
    
  },
  dangKy: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginLeft: 97,
    
  },
  dangNhapRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 43,
    marginRight: 41,
    justifyContent:"center"
  },
  tenDangNhap: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 10,
    
  },
  rect2: {
    
    borderRadius: 10,
    marginStart:5,
    marginEnd:5,
    height:30,
    opacity:"80%"
    
  },
  userNameContainer: {
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    justifyContent: 'center',
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  passwordContainer:{
    borderColor: '#262626',
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    justifyContent: 'center',
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  matKhau: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 9,
    marginLeft: 10,
   
  },
  rectMatkhau: {
    height:30,
    borderRadius: 10,
    borderColor: "#000000",
    marginStart:5,
    marginEnd:5,
    
  },
  quenMatKhau: {
    fontFamily: "roboto-regular",
    color: "rgba(255,4,4,1)",
    textAlign:"right",
    //right: 30
  },
  rect4: {
    height: 36,
    backgroundColor: "#3c68b1",
    borderRadius: 16,
    marginTop: 12,
    
  },
  dangNhap1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 34,
    textAlign:"center"
    
  },
  hoac: {
    fontFamily: "roboto-700",
    color: "rgba(17,79,152,1)",
    fontSize: 18,
    marginTop: 8,
    textAlign:"center"
  },
  icon: {
    color: "rgba(41,115,200,1)",
    fontSize: 45,
    height: 49,
    width: 45
  },
  icon2: {
    color: "rgba(247,16,16,1)",
    fontSize: 45,
    height: 49,
    width: 45,
    marginLeft: 40
  },
  icon3: {
    color: "rgba(95,157,233,1)",
    fontSize: 45,
    height: 49,
    width: 45,
    marginLeft: 40,
    marginTop: 3
  },
  iconRow: {
    height: 52,
    flexDirection: "row",
    marginTop: 7,
    justifyContent:"center"
  }
});

export default LoginSignup;
