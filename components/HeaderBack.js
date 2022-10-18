import React, { memo } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 import EntypoIcon from "react-native-vector-icons/Entypo";
 
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
// import { BrandText } from "src/components/Text/BrandText";
import { normalize } from "../helpers/normalize";
import { COLOR } from "../helpers/color";
import { AppText } from "./AppText";
 
 
const HeaderBack = memo(
  ({ titleLeft,title, noBack, goBackFuntion, hasRight, rightPress, titleRight,icon }) => {
 
    const navigation = useNavigation();
    const [widthVal] = React.useState(new Animated.Value(150));
    const [heightVal] = React.useState(new Animated.Value(40));

    //   React.useEffect(() => {
    //     Animated.timing(widthVal, {
    //       toValue: 116,
    //       duration: 600,
    //     }).start();
    //   }, [widthVal]);

    //   React.useEffect(() => {
    //     Animated.timing(heightVal, {
    //       toValue: 4,
    //       duration: 500,
    //     }).start();
    //   }, [heightVal]);

    const goBack = () => {
      if (goBackFuntion) {
        goBackFuntion();
      } else {
        navigation.goBack();
      }
    };
    const insets = useSafeAreaInsets();

     
    return (
      // <View>
      <Animated.View
        style={[
          styles.topHeader,
          {
            
            height: 44+insets.top,
            ...Platform.select({
              ios: {
                shadowColor: COLOR.textGray,
                shadowOffset: {
                  height: normalize(2),
                  width: 0,
                },
                shadowRadius: normalize(2),
                shadowOpacity: normalize(0.5),
              },
              android: {
                elevation: normalize(0.5),
              },
            }),
          },
        ]}
      >
        <View style={{ flexDirection: "row", height:'100%',paddingTop:insets.top,}}>
          
           <View style={{
                flex: 1,
              }}>
            {!noBack ? (titleLeft?titleLeft:(
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.viewBack}
              onPress={goBack}
            >
             <EntypoIcon  name={icon?icon:"chevron-left"} size={20}
                style={{ color: COLOR.white, marginRight: normalize(6) }} /> 
              
            </TouchableOpacity>
          )) : null}  
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {typeof title=="string"?<AppText
              fontSize={normalize(18)}
              fontWeight="600"
              numberOfLines={1}
              color={COLOR.white}
            >
              {title}
            </AppText>:title
            }
          </View>
          <View style={{flex:1,alignItems: "center",justifyContent: 'center'}}>
            {titleRight && typeof titleRight=="string"?<TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.viewBack,
                    {
                      paddingLeft: 0,
                      paddingRight: normalize(12),
                      justifyContent: "flex-end",
                    },
                  ]}
                  onPress={rightPress}
                >
                  <AppText
                    fontSize={normalize(15)}
                    fontWeight="500"
                    numberOfLines={1}
                    color={COLOR.white}
                  >
                    {titleRight}
                  </AppText>
                </TouchableOpacity>:titleRight }
          </View>
          
        </View>
      </Animated.View>
      // </View>
    );
  }
);
const styles = StyleSheet.create({
  topHeader: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(248,231,28,1)",
    borderTopWidth: 0,
    // borderBottomRightRadius: 35
  },
  viewBack: {
    flex: 1,
    paddingTop: normalize(4),
    paddingBottom: normalize(4),
    borderRadius: normalize(14),
    alignItems: "center",
    paddingLeft: normalize(16),
    flexDirection: "row",
  },
  txtLabel: {
    color: COLOR.white,
    fontSize: 15,
    textAlignVertical: "center",
    fontWeight: "600",
    // marginLeft: 8,
    marginTop: 2,
  },
});
export default HeaderBack;
