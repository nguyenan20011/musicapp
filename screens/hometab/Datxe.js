import React, { Component } from "react";
import { StyleSheet, View, Image, Text,TouchableOpacity,ScrollView } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Listitemdiachi from "../../components/Listitemdiachi";
import FeatherIcon from "react-native-vector-icons/Feather";


function Datxe(props) {
  return (
    <View style={styles.container}>   
      <View style={styles.image2Stack}>
        <Image 
          source={require("../../assets/taxi-booking-app-development.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.hiNguyenTruong}>Hi, Nguyễn Trường</Text>
        <Text style={styles.loremIpsum}>App đang đợi bạn, đặt xe ngay</Text>
        <View style={styles.rect8}></View>
      </View>
      <View style={styles.rectStack}>
        <TouchableOpacity onPress={()=>{
          props.navigation.navigate("LoginSignup");
        }} style={styles.boxsearch}>
          <EntypoIcon name="location-pin" style={styles.icon2}></EntypoIcon>
            <FeatherIcon name="search" style={styles.iconsearch}></FeatherIcon>
        </TouchableOpacity>
        <ScrollView style={{flex:1}}> 
        <View style={styles.rect}>
          <Image
            source={require("../../assets/thumbnail.jfif")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <ScrollView style={styles.rect3Row} horizontal={true}>
            <TouchableOpacity onPress={props.onPress} style={styles.rect3}>
              <View style={styles.icon3Row}>
                <EntypoIcon name="home" style={styles.icon3}></EntypoIcon>
                <Text style={styles.luuNhaRieng}>Lưu nhà riêng</Text>
              </View>
              </TouchableOpacity>
            <View style={styles.rect4}> 
              <TouchableOpacity onPress={props.onPress} style={styles.icon4Row}>
                <EntypoIcon name="suitcase" style={styles.icon4}></EntypoIcon>
                <Text style={styles.luuCongTy}>Lưu công ty</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={{padding:8}}>
          <Listitemdiachi style={styles.listitemdiachi}></Listitemdiachi>
          <Listitemdiachi style={styles.listitemdiachi}></Listitemdiachi>
          <Listitemdiachi style={styles.listitemdiachi}></Listitemdiachi>
          <Listitemdiachi style={styles.listitemdiachi}></Listitemdiachi>
          <Listitemdiachi style={styles.listitemdiachi}></Listitemdiachi>
          </View>
        </View>
        </ScrollView>  
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)"
  },
  image2: { 
    height: 160
  },
 
  image2Stack: {
    alignItems:'center',
    marginVertical:32
  },
  rect: {
    
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
     
  },
  image: {
   
    height: 98,
    borderRadius: 10,
    marginTop: 46,
    marginLeft: 8
  },
  rect3: { 
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(155,155,155,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  luuNhaRieng: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 5,
    marginTop: 5
  },
  icon3Row: {
    height: 27,
    flexDirection: "row", 
    marginRight: 8,
    marginLeft: 7,
    marginTop: 4
  },
  rect4: {
 
    height: 35,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    flexDirection: "row",
    marginLeft: 13
  },
  icon4: {
    color: "rgba(155,155,155,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  luuCongTy: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 6,
    marginTop: 5
  },
  icon4Row: {
    height: 27,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 9,
    marginTop: 4
  },
  rect3Row: {
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 15, 
  },
  listitemdiachi: { 
    marginTop: 8, 
  },
  boxsearch: {
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    top: -20,
    left: '5%',
    width: '90%',
    padding:8,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowColor: "rgba(15,15,15,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.19,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(133,130,130,1)",
    zIndex:10
  },
  icon2: {
    color: "rgba(251,6,36,1)",
    fontSize: 30,
    height: 33,
    width: 30
  },
  iconsearch: {
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    height: 22,
    width: 22 
  },
  rectStack: {
    flex:1,
    position:'relative',
    paddingHorizontal:8, 
    marginBottom:8
  },
  hiNguyenTruong: {
  
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
  },
  loremIpsum: {
    
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  
});

export default Datxe;
