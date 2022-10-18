import React, { Component } from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Entypo";

function ListitemHistory(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress} style={styles.khongDoiKhachStackStack}>
 
          <View style={styles.rect3}>
            <View style={styles.ellipseStack}>
                 
                <Icon  name="location-pin" style={styles.icon4}></Icon>
            </View>

            <View style={styles.ellipseStackRow}>
              
              <View style={styles.benXeMienDongColumn}>
                <Text style={styles.benXeMienDong}>Bến xe Miền Đông</Text>
                <Text style={styles.loremIpsum}>
                  9km . 292, Đinh Bộ Lĩnh, P.26, Q.Bình Thành
                </Text>
              </View>
            
            <Text style={styles.cong2}>Cổng 2</Text>
            <View style={styles.khongDoiKhach3Row}>
              <Text style={styles.khongDoiKhach3}>Không đợi khách</Text>
              <View style={styles.rect8}>
                <Text style={styles.phoBien}>Phổ biến</Text>
              </View>
            </View>
            <Text style={styles.cong2}>Cổng 4</Text>
            <View style={styles.khongDoiKhach3Row}>
              <Text style={styles.khongDoiKhach3}>Không đợi khách</Text>
              <View style={styles.rect8}>
                <Text style={styles.phoBien}>Phổ biến</Text>
              </View>
            </View>

            </View>
          </View>
        
        <View style={styles.rect13}>
          <Text style={styles.phoBien2}>Phổ biến</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
 
  rect3: {
    borderRadius:8,
    width: '100%',
    flexDirection:'row',
    borderWidth: 1,
    borderColor: "rgba(163,150,150,1)",
    borderStyle: "solid"
  },
  icon4: { 
    color: "rgba(17,23,125,1)",
    fontSize: 25,
    height: 27,
    width: 25
  },
  ellipseStack: {
    width: 30,
    height: 30,
    marginTop: 11
  },
  benXeMienDong: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 16
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
  
  },
  benXeMienDongColumn: {
    marginLeft: 8
  },
  ellipseStackRow: {
    flex:1,
 
    marginTop: 14,
    marginLeft: 11,
    marginRight: 27
  },
  cong2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 12
  },
  khongDoiKhach3: {
    fontFamily: "roboto-regular",
    color: "rgba(166,98,17,1)",
    marginTop: 7
  },
  rect8: {
   
    height: 29,
    backgroundColor: "#79e67b",
    marginLeft: 18,
     borderRadius:8,
  },
  phoBien: {
    fontFamily: "roboto-regular",
    color: "rgba(17,23,125,1)",
    marginTop: 6, 
    marginLeft: 8
  },
  khongDoiKhach3Row: {
    
    flexDirection: "row", 
  },
   
  phoBien2: {
    fontFamily: "roboto-regular",
    color: "rgba(17,23,125,1)",
    marginTop: 6,
    marginLeft: 8
  } 
});

export default ListitemHistory;
