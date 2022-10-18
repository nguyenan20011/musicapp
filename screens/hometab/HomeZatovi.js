import React, { Component } from "react";
import { StyleSheet, View, Image, Text,ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import HomeTab from "../HomeTab"

function HomeZatovi(props) {
  return (
    <View style={styles.container}>
    <ScrollView style={{flex:1}}>
      <View style={styles.rect}>
        <View style={styles.image1Row}>
          <Image
            source={require("../../assets/1._Logo_Zatovi.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Icon name="person" style={styles.icon}></Icon>
        </View>
      </View>
      <Image
        source={require("../../assets/khoimy2.jpg")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <View style={styles.groupRow}>
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.group}>   
          <Image
            source={require("../../assets/ca_si1.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Text style={styles.caSi}>Ca sĩ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group2}>
          <Image
            source={require("../../assets/nhac_si.png")}
            resizeMode="contain"
            style={styles.image6}
          ></Image>
          <Text style={styles.nhacSi}>Nhạc sĩ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group3}>
          <Image
            source={require("../../assets/dien_vien.png")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
          <Text style={styles.dienVien}>Diễn viên</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group4}>
          <Image
            source={require("../../assets/nguoi_mau.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.nguoiMau}>Người mẫu</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
      <Text style={styles.topNgheSiMoi}>TOP nghệ sĩ mới</Text>
      <ScrollView horizontal={true}>
      <View style={styles.image7Row}>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate("Nghesi")}} > 
        <Image
          source={require("../../assets/baoanh7.jpg")}
          resizeMode="cover"
          style={styles.image7}
        ></Image>
        </TouchableOpacity>
        <Image
          source={require("../../assets/quanap1.jpg")}
          resizeMode="cover"
          style={styles.image8}
        ></Image>
        <Image
          source={require("../../assets/khoimy51.jpg")}
          resizeMode="cover"
          style={styles.image9}
        ></Image>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate("Nghesi")}} > 
        <Image
          source={require("../../assets/noophuocthinh52.jpg")}
          resizeMode="cover"
          style={styles.image10}
        ></Image>
        </TouchableOpacity>
      </View>
      </ScrollView>
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
    height: 60,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginTop: 32,
    alignContent:"center"
  },
  image1: {
    width: 60,
    height: 60,
    
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 43,
    width: 30,
    marginLeft: 264,
    marginTop: 8,
    alignItems:"center"
  },
  image1Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 21
  },
  image2: {
    width: 375,
    height: 200,
    left:-10
  },
  group: {
    width: 50,
    height: 78
  },
  image4: {
    width: 50,
    height: 50
  },
  caSi: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    marginLeft: 9
  },
  group2: {
    width: 50,
    height: 78,
    marginLeft: 34
  },
  image6: {
    width: 50,
    height: 50
  },
  nhacSi: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11,
    marginLeft: 2
  },
  group3: {
    width: 57,
    height: 78,
    marginLeft: 34
  },
  image5: {
    width: 50,
    height: 50,
    marginLeft: 4
  },
  dienVien: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11
  },
  group4: {
    width: 69,
    height: 78,
    marginLeft: 30
  },
  image3: {
    width: 50,
    height: 50,
    marginLeft: 10
  },
  nguoiMau: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 11
  },
  groupRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 30,
    marginRight: 21
  },
  topNgheSiMoi: {
    fontFamily: "roboto-700",
    color: "rgba(247,194,20,1)",
    fontSize: 15,
    marginTop: 13,
    marginLeft: 11
  },
  image7: {
    width: 130,
    height: 250,
    borderRadius: 20
  },
  image8: {
    width: 130,
    height: 250,
    borderRadius: 20,
    marginLeft: 19
  },
  image9: {
    width: 130,
    height: 250,
    borderRadius: 20,
    marginLeft: 16
  },
  image10: {
    width: 130,
    height: 250,
    borderRadius: 20,
    marginLeft: 20
  },
  image7Row: {
    height: 250,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 15,
    marginRight: -215
  }

});

export default HomeZatovi;
