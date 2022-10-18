import { StyleSheet, View,TouchableOpacity,Image,Text, SafeAreaView} from "react-native"; 

function LoginSignup(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <Image
        source={require("../assets/1._Logo_Zatovi.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      </View>
      <View style={styles.rect}>
        <View style={styles.rectText}>
        <Text style={styles.charectorLibary}>CHARECTOR LIBARY</Text>
        <Text style={styles.text}>
          Nơi tổng hợp tất cả hồ sơ của các nghệ sĩ và ngôi sao doanh
          nhân,... Thường xuyên cập nhật và cung cấp đầy đủ thông tin về
          đối tượng đó.
        </Text>
        </View>
        <View style={styles.rect2Row}>
          <TouchableOpacity onPress={()=>{
          props.navigation.navigate("LoginSignup")
          }} style={styles.rect2}>
            <Text style={styles.dangNhap}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate("Register")
          }} style={styles.rect3}>
            <Text style={styles.dangKy}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-bettween"
  },
  image: {
    marginTop:64,
    alignItems:"center",
    marginBottom:64
  },
  image1: {
    width: 215,
    height: 215,
    
  },
  rect: {
    backgroundColor: "#f7c214",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    flex:1,
    justifyContent:"space-around"
  },
  charectorLibary: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginTop: 25,
    textAlign: "center",
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    textAlign: "center",
    marginTop: 33,
    marginLeft: 9
  },
  rect2: {
    width: 125,
    height: 45,
    backgroundColor: "#3c68b1",
    borderRadius: 15
  },
  dangNhap: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 24,
    
  },
  rect3: {
    width: 125,
    height: 45,
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginLeft: 65
  },
  dangKy: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 34
  },
  rect2Row: {
    height: 45,
    flexDirection: "row",
    marginLeft: 31,
    marginTop:64,
    justifyContent:"center",

    
  },
  rectText:{
    alignContent: "center",
    textAlign:"center",
    
  }
});

export default LoginSignup;
