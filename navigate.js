import React from 'react';

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack"; 
import {MenuProvider} from 'react-native-popup-menu';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

//import screens

import ListUser from "./screens/ListUser";
import Ddiachi from "./screens/Ddiachi";
import Ssearchbar from "./screens/Ssearchbar";
import DangnhapDangkyScreen from "./screens/DangnhapDangkyScreen";
import LoginSignup from "./screens/LoginSignup";
import Register from "./screens/Register";
import Forgotpassword from "./screens/Forgotpassword";
import Verificationcode from "./screens/Verificationcode";
import Nghesi from "./screens/Nghesi";
import HomeTab from "./screens/HomeTab";
import Feed from "./screens/hometab/Feed"

const pages = {
  HomeTab:HomeTab,
  Feed:Feed,
  Forgotpassword:Forgotpassword,
  Verificationcode:Verificationcode,
  ListUser:ListUser,
  Ssearchbar:Ssearchbar,
  Ddiachi:Ddiachi,
  DangnhapDangkyScreen:DangnhapDangkyScreen,
  LoginSignup:LoginSignup,
  Register:Register,
  Nghesi:Nghesi,
 
}
////////
const Stack = createStackNavigator();

//main call app
export default  AppNavigator = () => {

  return (
    <MenuProvider>
      <ActionSheetProvider>
      <Stack.Navigator headerMode="none" initialRouteName="DangnhapDangkyScreen">
       {/* dung xoa */}
       {Object.entries({ 
          ...pages
        }).map(([name, component]) => (
          <Stack.Screen name={name} options={{
            headerShown: false,
          }} key={name} component={component} />
        ))}
        {/* dung xoa */}  

      </Stack.Navigator>
      </ActionSheetProvider>
    </MenuProvider>
  );
};


