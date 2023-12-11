import { router } from "expo-router";
import { View , Text , TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "../Inc/Header";
import style from "../../../Config/Style/style";
import { Icon } from "react-native-vector-icons/FontAwesome5";
import colors from "../../../Config/Colors/colors";
import MapView , { Marker,Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { useRef } from "react";
import { Svg , Path } from "react-native-svg";


export default function FahtrenAktarma() {

    const mapStyle = require("../../../../mapstyle.json");
    const mapRef = useRef(null);
    const item = useLocalSearchParams();

    console.log(item);
    
    return (
        <>
          <View
            style={{
              gap: 15,
              flexDirection: "row",
              marginLeft: style.RootMarginLeft,
              marginRight: style.RootMarginRight,
              paddingVertical: 15,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 11,
              },
              shadowOpacity: 0.57,
              shadowRadius: 15.19,
              elevation: 23, // topdo görev burayı sonr agölge ekle
            }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Icon name={"caret-down"} size={15} color={colors.primary} />
              <Icon name={"map-marker-alt"} size={15} color={colors.red} /> */}
            </View>
            <View style={{ gap: 15 }}>
              <View style={{ flexDirection: "row", gap: 15 }}>
                <Text style={{ fontWeight: "bold" }}>14.02</Text>
                <Text>Adres Ak, Postakodu 123 Sehir X</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 15 }}>
                <Text style={{ fontWeight: "bold" }}>15.02</Text>
                <Text>Adres B, Postakodu 456 Sehir Y</Text>
              </View>
            </View>
          </View>
          <MapView
            ref={mapRef}
            customMapStyle={mapStyle}
            style={{
              width: "100%",
              height: 600,
              borderRadius: 15,
              position: "relative",
            }}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: item.Lat,
              longitude: item.Long,
              latitudeDelta: 1,
              longitudeDelta: 1,
            }}
          >
            <Marker
              coordinate={{
                latitude: item.Lat,
                longitude: item.Long,
              }}
            >
              <Svg width={30} height={30} viewBox="0 0 512 512">
                <Path
                  d="M420.133,0H94.315C68.715,0,47.77,20.945,47.77,46.545v300.218c0,16.291,6.982,30.254,20.945,39.563
                  L257.224,512l188.509-125.673c11.637-9.31,20.945-23.272,20.945-39.563V46.545C466.678,20.945,445.732,0,420.133,0z"
                  fill={"#9cc602"}
                />
                <Path
                  fill={"#fff"}
                  d="M334.743,122.647H179.705c-2.518,0-4.561,2.038-4.561,4.56v155.039c0,2.521,2.043,4.561,4.561,4.561h155.038
                  c2.519,0,4.561-2.039,4.561-4.561V127.207C339.304,124.685,337.262,122.647,334.743,122.647z"
                />
              </Svg>
            </Marker>
    
            <Polyline
              coordinates={[
                {
                  latitude: item.Lat,
                  longitude: item.Long,
                },
                {
                  latitude: item.Lat2,
                  longitude: item.Long2,
                },
              ]}
              strokeColor={'#9cc602'}
              strokeWidth={6}
            />
    
            <Marker
              coordinate={{
                latitude: item.Lat2,
                longitude: item.Long2,
              }}
            >
              <Svg width={30} height={30} viewBox="0 0 512 512">
                <Path
                  d="M420.133,0H94.315C68.715,0,47.77,20.945,47.77,46.545v300.218c0,16.291,6.982,30.254,20.945,39.563
        L257.224,512l188.509-125.673c11.637-9.31,20.945-23.272,20.945-39.563V46.545C466.678,20.945,445.732,0,420.133,0z"
                  fill={"#9cc602"}
                />
                <Path
                  fill={"#fff"}
                  d="M356.491,195.132l-157.37-108.53c-1.666-1.145-3.826-1.264-5.605-0.336
                  c-1.785,0.939-2.903,2.783-2.903,4.802v217.061c0,2.018,1.118,3.868,2.903,4.809c0.792,0.412,1.66,0.618,2.523,0.618
                  c1.08,0,2.155-0.326,3.083-0.961l157.37-108.53c1.471-1.015,2.344-2.681,2.344-4.466S357.956,196.147,356.491,195.132z"
                />
              </Svg>
            </Marker>
          </MapView>
          <View
            style={{
              width: "100%",
              // height: "100%",
              backgroundColor: "#fff",
              position: "absolute",
              bottom: 0,
              paddingBottom: 50,
              borderTopStartRadius: 50,
              borderTopEndRadius: 50,
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,
              elevation: 24,
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 20,
              }}
            >
      
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  borderTopWidth: 1,
                  borderTopColor: "#eaeaeb",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginTop: 15,
                  }}
                >1</Text>
              </View>
            </View>
          </View>
        </>
      );
}