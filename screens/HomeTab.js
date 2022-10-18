import React, { useEffect,useState,useContext} from 'react';
import { StyleSheet, View, Text, TextInput, Image, Switch,SafeAreaView,ScrollView,TouchableOpacity,Button} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from "../AuthProvider";
import Icon from "react-native-vector-icons/Feather";

import User from "./hometab/User";
import Profile from "./hometab/Profile";
import Datxe from "./hometab/Datxe"; 
import Feed from "./hometab/Feed";
import HomeZatovi from "./hometab/HomeZatovi"

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeZatovi"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeZatovi"
        component={HomeZatovi}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Datxe"
        component={HomeZatovi}
        options={{
          tabBarLabel: 'Thông Báo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Util"
        component={User}
        options={{
          tabBarLabel: 'Người dùng',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'Cài đặt',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings"  color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
 