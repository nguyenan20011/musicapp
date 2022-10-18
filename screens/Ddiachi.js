import React, { Component } from "react";
import { StyleSheet, View, Text,ScrollView,TouchableOpacity,SafeAreaView} from "react-native";
import ListitemHistory from "../components/ListitemHistory";
import EntypoIcon from "react-native-vector-icons/Entypo";
import HeaderBack from "../components/HeaderBack"; 
import { Searchbar } from 'react-native-paper';

function Diachi(props) {
  return (
    <View style={styles.container}>
      <HeaderBack title={"Địa didemr"} />
      
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{  
          props.navigation.navigate("Ssearchbar")
        }} style={styles.rect1}>
          <EntypoIcon name="location" style={styles.icon3}></EntypoIcon>
        </TouchableOpacity> 

        <TouchableOpacity onPress={()=>{  
          props.navigation.navigate("Ssearchbar")
        }} style={styles.rect1}>
          <EntypoIcon name="location-pin" style={[styles.icon3,{color:"red"}]}></EntypoIcon>
        </TouchableOpacity>   
 
      </View> 
      <Text style={styles.diaDiemPhoBien}>Địa điểm phổ biến</Text>
      <ScrollView style={{flex:1,padding:8}}> 
       
        <ListitemHistory style={styles.listitemHistory}></ListitemHistory>
         <ListitemHistory style={styles.listitemHistory}></ListitemHistory>
          <ListitemHistory style={styles.listitemHistory}></ListitemHistory>
           <ListitemHistory style={styles.listitemHistory}></ListitemHistory>
      </ScrollView>
      <SafeAreaView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)"
  },
  listitemHistory: {
   
  },
  rect1: {
 
    height: 44,
    width:'90%',
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
    marginBottom:8
  },
   
  icon3: {
    color: "rgba(33,92,195,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginLeft:6,
    marginTop: 6, 
  },

  diaDiemPhoBien: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 8,
    
  }
});

export default Diachi;