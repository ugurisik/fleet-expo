import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, paddingVertical, Image, ScrollView, TextInput } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import Header from "../Inc/Header";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function Tod() {
    const navigation = 1;
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

    return (
        <>
            <Header navigation={1} title='Fahrtenbuch' icon='arrow-left' />
            <View style={{
                display: "flex",
                width: "100%",
                backgroundColor: "#fff",
                flexDirection: "column",
                shadowColor: "#000",
                zIndex: 2,
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,

            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center"
                }}>
                    <View style={{
                        width: "15%",
                        transform: [{ rotateX: '180deg' }]
                    }}>
                        <Icon style={{}} name='navigation' size={30} color={colors.primary} />
                    </View>

                    <View style={{
                        width: "75%",
                        borderBottomWidth: 1,
                        borderBottomColor: "gray",
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                        }}>14:02</Text>
                        <Text>Adres A, Postakodu 123 Sehir X</Text>
                    </View>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center"
                }}>
                    <View style={{
                        width: "15%",
                    }}>
                        <Icon style={{}} name='location-on' size={30} color={colors.primary} />
                    </View>

                    <View style={{
                        width: "75%",
                        borderBottomWidth: 1,
                        borderBottomColor: "gray",
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                        }}>14:02</Text>
                        <Text>Adres A, Postakodu 123 Sehir X</Text>
                    </View>
                </View>
            </View>
            <MapView
                customMapStyle={mapStyle}
                style={{ width: '100%', height: 600, borderRadius: 15, position: 'relative' }}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: 38.42090290578521,
                    longitude: 27.1319021103306,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                <Marker
                    coordinate={{
                        latitude: 38.42090290578521,
                        longitude: 27.1319021103306,
                    }}
                >
                </Marker>
            </MapView>
            <View style={{
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
                shadowRadius: 16.00,
                elevation: 24,
            }}>
                <View style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginTop: 20
                }}>
                    <View style={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            borderRadius: 100,
                            padding: 10,
                            backgroundColor: "red",
                            width: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Icon style={{}} name='security' size={30} color="#fff" />
                        </View>

                        <View style = {{ width : '60%'}}>
                            <Text>Betriebsfahrt</Text>
                            <Text>am 12.11.2023 um 18:54 uhr</Text>
                        </View>

                        <View>
                            <Text>16 KM</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                }}>
                    <View style={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                        borderTopWidth: 1,
                        borderTopColor: "gray",
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            marginTop: 15
                        }}>23 Minuten . 1 Stopp . 142 Kilometer</Text>
                    </View>
                </View>
            </View>
        </>
    )
}