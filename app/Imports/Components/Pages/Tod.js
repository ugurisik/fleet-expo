import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  paddingVertical,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Config from "../../../Config/Config";
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import Header from "../Inc/Header";
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker, Polyline } from "react-native-maps";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { Path, Svg } from "react-native-svg";

export default function Tod() {
  const item = useLocalSearchParams();

  let date = new Date(item.Date);
  date = date.toLocaleString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const setPrivfahrt = async (type) => {
    let token = 123;
    let url;

    if (type == "privfahrt") {
      url = `https://safari-gps.live/func/fn_fleet.php?api=true&cmd=set_trip_private&trip_id=${item.id}&token=${token}`;
    } else if (type == "arbeistweg") {
      url = `https://safari-gps.live/func/fn_fleet.php?api=true&cmd=set_trip_arbeitsweg&trip_id=${item.id}&token=${token}`;
    } else {
      return false;
    }

    const response = await axios({
      method: "GET",
      url: url,
    });

    if (response.data.status === 1) {
      Alert.alert("Başarılı", `${type} ayarlandı`, [
        {
          text: "ok",
          onPress: () => {
            router.replace("Imports/Components/Pages/Drivesheet");
          },
        },
      ]);
    }
  };

  let mapStyle = [
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.local",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];

  const mapRef = React.useRef();

  useEffect(() => {
    mapRef.current.fitToCoordinates(
      [
        {
          latitude: item.Lat,
          longitude: item.Long,
        },
        {
          latitude: item.Lat2,
          longitude: item.Long2,
        },
      ],
      {
        edgePadding: {
          top: 100,
          right: 100,
          bottom: 100,
          left: 100,
        },
        animated: true,
      }
    );
  });

  return (
    <>
      <Header title={date} icon="arrow-left" />
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
          <Icon name={"caret-down"} size={15} color={colors.primary} />
          <Icon name={"map-marker-alt"} size={15} color={colors.red} />
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
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 15,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setPrivfahrt("privfahrt");
                }}
                style={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    padding: 10,
                    backgroundColor: "red",
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
                </View>
                <Text style={{ color: "red", marginTop: 10, fontSize: 12 }}>
                  Privatfahrt
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  router.push({
                    pathname: "/Imports/Components/Pages/Bet",
                    params: item,
                  });
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    padding: 10,
                    backgroundColor: "green",
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
                </View>
                <Text style={{ color: "green", marginTop: 10, fontSize: 12 }}>
                  Betriebsfahrt
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPrivfahrt("arbeistweg");
                }}
                style={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    padding: 10,
                    backgroundColor: "orange",
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
                </View>
                <Text style={{ color: "orange", marginTop: 10, fontSize: 12 }}>
                  Arbeistweg
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  router.push({
                    pathname: "/Imports/Components/Pages/Mischfahrt",
                    params: item,
                  });
                }}
              >
                <View
                  style={{
                    borderRadius: 100,
                    padding: 10,
                    backgroundColor: colors.primary,
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
                </View>
                <Text
                  style={{ color: colors.primary, marginTop: 10, fontSize: 12 }}
                >
                  Mischfahrt
                </Text>
              </TouchableOpacity>
            </View>

            {/* <View>
              <Text style={{ color: "#616161" }}>16 KM</Text>
            </View> */}
          </View>
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
            >
              {item.Km + " Kilometer"}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
