import React, { Component } from "react";
import { StyleSheet, View, Text,SafeAreaView } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialMapView from "../../components/MaterialMapView";
import CupertinoSearchBarBasic from "../../components/CupertinoSearchBarBasic";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Searchbar } from 'react-native-paper';

function Feed(props) {
  return (
    <View style={styles.container}>
    <SafeAreaView/>
    <View>
       <CupertinoSearchBarBasic style={styles.cupertinoSearchBarBasic}>
      </CupertinoSearchBarBasic>
    </View>
      <MaterialMapView style={styles.materialMapView}></MaterialMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,231,28,1)",
    justifyContent:'space-between'
  },
 
  materialMapView: {
    flex:1
  },
  cupertinoSearchBarBasic: {
    height: 50
  },
  
});
export default Feed;