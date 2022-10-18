import React, { Component } from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Listitemdiachi(props) {
  return (
    <View style={[styles.container, props.style]}>
      
        <TouchableOpacity onPress={props.onPress} style={styles.icon5Row}>
          <Icon name="clock" style={styles.icon5}></Icon>
          <View style={styles.loremIpsum2Column}>
            <Text style={styles.loremIpsum2}>22/1 Nguyễn Hữu Tiến</Text>
            <Text style={styles.loremIpsum3}>
              22/1 Nguyễn Hữu Tiến, Tây Thạnh, Tân
            </Text>
          </View>
        </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(170,164,164,1)",
    borderRadius: 10,
    flex: 1
  },
  icon5: {
    color: "rgba(30,235,35,1)",
    fontSize: 40,
    height: 43,
    width: 40
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 17
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6
  },
  loremIpsum2Column: {
    flex:1,
 
    position: "relative"
  },
  icon5Row: {
    padding:8,
    flexDirection: "row",  
    width:'100%'
  }
});

export default Listitemdiachi;
