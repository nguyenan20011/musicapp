import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, ScrollView,Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from '../components/BottomSheet';
import PictureComponent from "../components/PictureComponent";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";



function Nghesi(props) {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <ScrollView style={{flex:1}}>
      <Image
        source={require("../assets/baoanh7.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></Image>
      <BottomSheet>
          <View style={{ flex: 1, backgroundColor: "rgba(255,255,255,1)" }} />
      <View style={styles.baoAnh1Row}>
        <Text style={styles.baoAnh1}>BẢO ANH</Text>
        <EntypoIcon name="heart" style={styles.icon1}></EntypoIcon>
      </View>    
      <View style={styles.caSy1Row}>
        <Text style={styles.caSy1}>Ca sỹ</Text>
        <Text style={styles.text1}>1.5M</Text>
      </View>
      
      <View style={styles.icon2Row}>
      <TouchableOpacity onPress={()=>{
          props.navigation.navigate("HomeZatovi")}}>
        <EntypoIcon name="chevron-left" style={styles.icon2}></EntypoIcon>
      </TouchableOpacity>
        <IoniconsIcon name="ios-share-alt" style={styles.icon3}></IoniconsIcon>
      </View>
      <Text style={styles.text2}>
        “Phụ nữ là để ca ngợi bởi họ là biểu {"\n"}trưng của cái đẹp,vì vậy sự
        so sánh{"\n"}nào cũng khập khiễng. Hãy tôn vinh phụ nữ!!!”
      </Text>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <Text style={styles.gioiThieu}>Giới thiệu</Text>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.tacPham}>Tác phẩm</Text>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.tinTuc}>Tin tức</Text>
        </View>
      </View>
      <Text style={styles.hinhanh}>Hình ảnh</Text>
      <PictureComponent style={styles.pictureComponent1}></PictureComponent>
      <PictureComponent style={styles.pictureComponent1}></PictureComponent>
      <PictureComponent style={styles.pictureComponent1}></PictureComponent>
      <PictureComponent style={styles.pictureComponent1}></PictureComponent>
      </BottomSheet>
      </ScrollView>
    </View> 
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 782
  },
  image: {
    width: 375,
    height: 782
  },
caSy1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 10,
    
  },
  text1: {
    fontFamily: "roboto-700italic",
    color: "rgba(60,104,177,1)",
    fontSize: 25,
    marginLeft: 221
  },
  caSy1Row: {
    height: 30,
    flexDirection: "row",
    marginTop:10,
    left:20
  },
  baoAnh1: {
    fontFamily: "roboto-700",
    color: "rgba(247,194,20,1)",
    fontSize: 30,
    marginTop: 25
  },
  icon1: {
    color: "rgba(255,1,1,1)",
    fontSize: 50,
    marginLeft: 134
  },
  baoAnh1Row: {
    height: 55,
    flexDirection: "row",
    left:20,
    marginTop:25
    
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginLeft: 295,
    marginTop: 3
  },
  icon2Row: {
    height: 46,
    flexDirection: "row",
    marginTop: -104,
    marginRight: 10
  },
  text2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "left",
    fontSize: 16,
    marginTop: 113,
    marginLeft: 26
  },
  rect2: {
    width: 100,
    height: 30,
    backgroundColor: "rgba(60,104,177,1)",
    borderRadius: 15
  },
  gioiThieu: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 19
  },
  rect3: {
    width: 100,
    height: 30,
    backgroundColor: "rgba(247,194,20,1)",
    borderRadius: 15,
    marginLeft: 11
  },
  tacPham: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 18
  },
  rect4: {
    width: 100,
    height: 30,
    backgroundColor: "rgba(247,194,20,1)",
    borderRadius: 15,
    marginLeft: 18
  },
  tinTuc: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 26
  },
  rect2Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 26,
    marginRight: 20
  },
  hinhanh: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 30,
    marginLeft: 26
  },
  pictureComponent1: {
    height: 150,
    width: 329,
    marginTop: 17,
    marginLeft: 23
  }
});

export default Nghesi;
