import * as React from 'react';
import { View,Text,StyleSheet,SafeAreaView,ScrollView,TouchableOpacity} from "react-native";
import Box from "../components/Box";
 
import FeatherIcon from "react-native-vector-icons/Feather";
import Avatar from "../components/Avatar";
import HeaderBack from "../components/HeaderBack"; 

export default function Demo(props) {
  return (
    <View style={{flex:1}}>
      <HeaderBack title={"Demo"} /> 
       
      <Text style={styles.here1}>Here are something you can do</Text>
      <View style={{justifyContent:'space-between',flexWrap:'wrap',flexDirection: 'row'}}>

         <Box onPress={()=>{
           
          }} style={styles.box}></Box>
         <Box onPress={()=>{
            
          }} style={[styles.box,styles.box1]}></Box>
         <Box onPress={()=>{
         
          }} style={[styles.box,styles.box1]}></Box>
         <Box onPress={()=>{
            
          }} style={styles.box}></Box>
         

      </View>
      <Text style={styles.yourFavoritePeople}>Your favorite people</Text>
      
       <ScrollView horizontal>
        <View style={styles.ellipseStackColumn}>
          <View style={[styles.bg,{backgroundColor:'#cecece',alignItems: 'center',justifyContent :'center'}]}>
           
            <FeatherIcon name="plus" style={styles.icon2}></FeatherIcon>
          </View>
          <Text style={styles.add}>Add</Text>
        </View>
        
          <TouchableOpacity onPress={()=>{
            alert(1);
          }}><Avatar style={styles.avatar}></Avatar></TouchableOpacity> 
          <TouchableOpacity onPress={()=>{
            alert(1);
          }}><Avatar style={styles.avatar}></Avatar></TouchableOpacity> 
          <TouchableOpacity onPress={()=>{
            alert(1);
          }}><Avatar style={styles.avatar}></Avatar></TouchableOpacity> 
          <TouchableOpacity onPress={()=>{
            alert(1);
          }}><Avatar style={styles.avatar}></Avatar></TouchableOpacity> 

          <TouchableOpacity onPress={()=>{
            alert(1);
          }}><Avatar style={styles.avatar}></Avatar></TouchableOpacity> 
          <TouchableOpacity onPress={()=>{
            alert(1);
          }}><Avatar style={styles.avatar}></Avatar></TouchableOpacity> 
      </ScrollView>
      
      
         
    <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonShare: {
    height: 56,
    width: 56,
    position: "absolute",
    right: 10,
    bottom: 72
  },
  hiEhi: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
 
  },
  hiEhiRow: {
  
    flexDirection: "row",
    justifyContent:'space-between'
  },
   
  here: {
 
    //fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.84
  },
  here1: {
 
    //fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.84
  },
  hereStack: {
    width: 193,
    height: 17,
    marginTop: 52,
 
  },
  box: {
    height: 144,
    width: '48%',
    backgroundColor: "rgba(217,231,247,1)",
    marginBottom:'4%'
  },
  box1: {
   
    backgroundColor: "rgba(159,237,220,1)",
   
  },
  yourFavoritePeople: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.84,
    marginTop: 19,
    marginBottom: 19,
 
  },
  ellipse: {
 
    width: 78,
    height: 75,
     
  },
  icon2: {
    
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  ellipseStack: {
   
  },
  add: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    opacity: 0.84,
    marginTop: 5, 
  },
  ellipseStackColumn: {
    width: 78,
    marginBottom: 3,
    alignItems:'center'
  },
  bg:{
    height: 75,
    width: 75, 
    borderRadius:50,
    marginRight:8
  },
  avatar: {
    height: 97,
    width: 75, 
    marginRight:8
  },
  avatar1Stack: {
    width: 75,
    height: 97, 
  },
  avatar4: {
    height: 97,
    width: 75, 
  },
  avatar2: {
    height: 97,
    width: 75, 
    marginTop: 3
  },
  
  image: {
    height: 30,
    width: 22
  },
  sgd: { 
    color: "#121212"
  },
  icon3: {
 
    color: "rgba(128,128,128,1)",
    fontSize: 30
  },
  sgdStack: {
    width: 56,
    height: 34, 
    marginTop: 1
  },
  imageRow: {
    height: 35,
    flexDirection: "row",
 
  } 
}); 