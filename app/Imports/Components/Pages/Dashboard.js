import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Image, ScrollView, TextInput, Text } from "react-native";
import Config from '../../../Config/Config';
import Header from "../Inc/Header";
import style from "../../../Config/Style/style";
import Cizgi from "../Inc/Cizgi";
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from "../../../Config/Colors/colors";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StatusBar } from "expo-status-bar";
import { Navigator } from "expo-router";
import { router } from 'expo-router';
import { useNavigation } from 'expo-router';
import Svg, { Path } from "react-native-svg";


export default function Dashboard() {


  const data = [
    {
      'icon': 'biohazard',
      'title': 'Privatfahrt',
      'subtitle': 'am 13.11.2023 um 12:00 Uhr',
      'km': '19'
    },
    {
      'icon': 'car',
      'title': 'Betriebsfahrt',
      'subtitle': 'am 13.11.2023 um 12:00 Uhr',
      'km': '66'
    }, {
      'icon': 'briefcase',
      'title': 'Sicherheitsbericht',
      'subtitle': 'am 13.11.2023 um 12:00 Uhr',
      'km': '23'
    }
  ]
  let mapStyle =
    [
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]


  return (
    <>
      <StatusBar hidden />
      <View style={{
        backgroundColor: colors.primary,
        paddingTop: 30,
      }}>
        <View style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
        }}>
          <View style={{
            width: '100%',
            height: 70,
            backgroundColor: colors.primary,

          }}>
            <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', paddingVertical: 25, paddingHorizontal: 15 }}>

              <View style={{ justifyContent: 'center' }}>
                <Icon name='user-circle' size={30} color='#fff' />
              </View>

              <View style={{ width: '75%', justifyContent: 'center' }}>
                <Text style={[style.Title, { fontSize: 12 }]}>Guten Morgen</Text>
                <Text style={[style.Title, { fontSize: 16 }]}>Tarik Önal</Text>
              </View>

              <TouchableOpacity onPress={() => {
                router.push('/Imports/Components/Pages/Settings')
              }}>
                <Icon name='cog' size={30} color='#fff' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            width: '100%',
            height: 100,
            borderBottomRightRadius: 65, // sağ alt köşe için ortalama bir değer
            borderBottomLeftRadius: 65,
            backgroundColor: colors.primary,
            paddingHorizontal: 15,
            paddingTop: 15,
            marginBottom: 165
          }}>
            <Text style={{ color: colors.white, fontSize: 16, fontWeight: style.fontWeight, marginBottom: 15 }}>Muster GmbH</Text>

            <MapView
              customMapStyle={mapStyle}
              style={{ width: '100%', height: 200, borderRadius: 15, position: 'relative' }}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: 38.42090290578521,
                longitude: 27.1319021103306,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <View style={{ position: 'absolute', left: 0, top: 0, padding: 10 }}>
                <Text style={{ color: colors.primary, fontWeight: 'bold', fontSize: 14 }}>Ford Focus</Text>
                <Text style={{ color: colors.primary, fontSize: 12 }}>GPS Online</Text>
              </View>
              <Marker
                coordinate={{
                  latitude: 38.42090290578521,
                  longitude: 27.1319021103306,
                }}
              >
                <Icon name='car' size={30} color={colors.primary} />
              </Marker>
            </MapView>

          </View>



          <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
            <TouchableOpacity style={{
              backgroundColor: colors.red,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 15,
              borderRadius: 5
            }}
              onPress={() => {
                router.push('/Imports/Components/Pages/Drivesheet')
              }}
            >
              <View>
                <Svg height="30" width="30" fill={'white'} viewBox="0 0 20 20">
                  <Path
                    d="m5 8.165v-2.165c0-2.209 1.791-4 4-4-.178 0 0 0 0 0 2.209 0 4 1.791 4 4 0 .552-.448 1-1 1s-1-.448-1-1c0-1.105-.895-2-2-2s-2 .895-2 2v2h5.018c1.647 0 2.982 1.335 2.982 2.982v4.036c0 .791-.314 1.55-.873 2.109s-1.318.873-2.109.873h-5.018c-.552 0-1-.448-1-1 0-1.104-.896-2-2-2-.552 0-1-.448-1-1v-3.018c0-1.303.835-2.411 2-2.817zm0 8.835c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm3-5v2c0 .552.448 1 1 1s1-.448 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1zm7-4h1c.552 0 1-.448 1-1s-.448-1-1-1h-1c-.552 0-1 .448-1 1s.448 1 1 1zm.707-3.293 1-1c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-1 1c-.39.39-.39 1.024 0 1.414s1.024.39 1.414 0z"
                  />
                </Svg>
              </View>
              <Text style={{ color: colors.white, fontWeight: style.fontWeight, width: '80%', textAlign: 'center' }}>Offene Fahrten bearbeiten</Text>
            </TouchableOpacity>
          </View>


          <Cizgi />
          <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: style.fontWeight, color: '#505050' }}>Letzte Fahrten</Text>
            <TouchableOpacity onPress = {() => {
              router.push('/Imports/Components/Pages/Fahrtenbuch')
            }}>
              <Text style={{ color: colors.primary, fontSize: 14, fontWeight: "bold" }}>Alle anzeigen</Text>
            </TouchableOpacity>
          </View>



          <View style={style.ItemsGap10AndFlex}>
            {data && data.map((item, index) => {
              return (
                <React.Fragment key={index} >
                  <TouchableOpacity onPress={() => {
                    router.push('/Imports/Components/Pages/Tod', {
                      params: {
                        title: item.title  // todo arac bilgisi
                      }
                    })
                  }}>
                    <View style={{ display: "flex", flexDirection: 'row', width: '100%', gap: 15, alignItems: 'center' }}>
                      <View style={[style.IconKutu, { backgroundColor: '#d0d0d0' }]}>
                        <Icon name={item.icon} size={20} color="white" />
                      </View>
                      <View style={{ width: '70%' }}>
                        <Text style={{ fontSize: 16, fontWeight: style.fontWeight, marginBottom: 5, color: '#616161' }}>{item.title}</Text>
                        <Text style={[style.SubTitle, { color: '#505050' }]}>{item.subtitle}</Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 12, fontWeight: style.fontWeight, color: '#929292' }}>{item.km} KM</Text>
                      </View>
                    </View>
                    <Cizgi margintop={15} />
                  </TouchableOpacity>
                </React.Fragment>
              )
            })}
          </View>
        </View>
      </View>
    </>
  )
}