


import React, { useEffect,useState,useContext} from 'react';
import { StyleSheet, View, Text, TextInput, Image, Switch,SafeAreaView,ScrollView,TouchableOpacity,Button} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from "../../AuthProvider";

function Profile(props) {
  const { register,db,showAlert} = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

export default Profile;