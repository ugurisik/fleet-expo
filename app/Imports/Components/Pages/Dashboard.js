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


export default function Dashboard() {


  const data = [
    {
      'icon': 'biohazard',
      'title': 'Sicherheitsbericht',
      'subtitle': 'am 13.11.2023 um 12:00 Uhr',
      'km': '66'
    },
    {
      'icon': 'car',
      'title': 'Sicherheitsbericht',
      'subtitle': 'am 13.11.2023 um 12:00 Uhr',
      'km': '66'
    }, {
      'icon': 'shield-alt',
      'title': 'Sicherheitsbericht',
      'subtitle': 'am 13.11.2023 um 12:00 Uhr',
      'km': '66'
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

  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.addListener('beforeRemove', (e) => {
  //     e.preventDefault();

  //     router.back();

  //     navigation.dispatch(e.data.action);
  //   });
  // }, []);

  return (
    <>
      <StatusBar hidden />
      <View style={{
        backgroundColor: colors.primary,
        paddingTop: 30
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
                <Text style={[style.Title, { fontSize: 14 }]}>Guten Morgen</Text>
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
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 10,
              borderRadius: 5
            }}
            onPress={() => {
              router.push('/Imports/Components/Pages/Drivesheet')
            }}
            >
              <Icon name='lock' size={20} color='white' />
              <Text style={{ color: colors.white, fontWeight: style.fontWeight }}>Offene Fahrten bearbeiten</Text>
            </TouchableOpacity>
          </View>


          <Cizgi />
          <View style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", marginBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: style.fontWeight }}>Letzte Fahrten</Text>
            <Text style={{ color: colors.primary, fontSize: 14, fontWeight: style.fontWeight }}>Alle anzeigen</Text>
          </View>



          <View style={style.ItemsGap10AndFlex}>
            {data && data.map((item, index) => {
              return (
                <React.Fragment key={index} >
                  <TouchableOpacity onPress = {() => { router.push('/Imports/Components/Pages/Tod' , {
                    params : {
                      title : item.title
                    }
                  }) }}>
                  <View style={{ display: "flex", flexDirection: 'row', width: '100%', gap: 15, alignItems: 'center' }}>
                    <View style={style.IconKutu}>
                      <Icon name={item.icon} size={20} color="white" />
                    </View>
                    <View style={{ width: '70%' }}>
                      <Text style={{ fontSize: 16, fontWeight: style.fontWeight, marginBottom: 5 }}>{item.title}</Text>
                      <Text style={style.SubTitle}>{item.subtitle}</Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 12, fontWeight: style.fontWeight }}>{item.km} km</Text>
                    </View>
                  </View>
                  <Cizgi />
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