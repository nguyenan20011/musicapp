import React, { useState ,useEffect} from "react";
import { StyleSheet, View ,Image,Text,TouchableOpacity} from "react-native";
import MapView from "react-native-maps";
//import Geolocation from '@react-native-community/geolocation';
// import * as Location from 'expo-location';

function MaterialMapView(props) {
 const [location, setLocation] = useState({
            latitude: 10.8046046,
            longitude: 106.6173419
          });

//  const init=async () => {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         // setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
// };
//  useEffect(()=>{
//     init();
//  },[]);
//  {location?<MapView.Marker
        //   coordinate={location}
        //   description={<Text>"This is a marker in React Natve"</Text>}
        //   image={{uri:"https://cdn-icons-png.flaticon.com/128/1397/1397898.png"}}
        //   height={35}
        //   width={35}
        //   />:null}
// getMarkers = () => {
//     let markers = this.state.data.map((marker, index) => {
//         let magnitude = marker.magnitude;
//   let icon = undefined;
//   if(magnitude < 4.0)
//   {
//     icon = require('./assets/image_earthquakes_one.png')
//   }
//         else if(magnitude >= 4.0 & magnitude <= 5.0)
//         {
//             icon = require('./assets/image_earthquakes_two.png')
//         }
//         else if(magnitude > 5.0)
//         {
//             icon = require('./assets/image_earthquakes_three.png')
//         }

//         return ( <MapView.Marker coordinate = {
//                 {
//                     latitude: Number(marker.latitude),
//                     longitude: Number(marker.longitude)
//                 }
//             }
//             image = {
//                 icon
//             }
//             key = {
//                 index
//             }
//             >
//             <MapView.Callout>
//                 <View>
            
//                     <Text>Lat:{marker.latitude}, Lon:{marker.longitude}</Text>
//                     <Text>Magnitude:{marker.magnitude}, Depth:{marker.depthkm}</Text>
//                 </View>
//             </MapView.Callout>
//             </MapView.Marker>
//         );
//     });
//     return markers;
// }
//  <MapView.Marker
//           coordinate={{
//             latitude: 10.8046046,
//             longitude: 106.6173419
//           }}
//           description={"This is a marker in React Natve"}
//           image={{uri:"https://cdn-icons-png.flaticon.com/128/1397/1397898.png"}}
//           height={35}
//           width={35}
//           >
//               <MapView.Callout>
//                 <TouchableOpacity onPress={onPress} style={{width:240}}>
//                     <Image source={{uri:"https://cdn-icons-png.flaticon.com/128/869/869432.png"}} style={{width:128,height:128}} />
//                     <Text>Lat:{location.latitude}, Lon:{location.longitude}</Text>
//                     <Text>Magnitude:{location.magnitude}, Depth:{location.depthkm}</Text>
//                 </TouchableOpacity>
//             </MapView.Callout>
//           </MapView.Marker>

  const onPress=()=>{
     alert(1);
  }
  return (
    <View style={[styles.container, props.style]}>
      <MapView customMapStyle={"undefined"} region={{
            latitude: 10.8046046,
            longitude: 106.6173419
          }} style={styles.MapView1}
          minZoomLevel={14}
          >
         
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  MapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)"
  }
});

export default MaterialMapView;
