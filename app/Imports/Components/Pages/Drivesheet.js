import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Image, ScrollView, TextInput, Text } from "react-native";
import Config from '../../../Config/Config';
import Header from "../Inc/Header";
import style from "../../../Config/Style/style";
import Cizgi from "../Inc/Cizgi";
import Icon from 'react-native-vector-icons/FontAwesome5';

import usePlatform from "../../Hooks/usePlatform";

export default function Drivesheet() {
    const navigation = 1;

    const subicons = [
        { icon: 'link' },
        { icon: 'car' },
    ];

    const today = new Date().toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })

    const data = [
        {
            'startDate': '15:02',
            'endDate': '16:15',
            'startLocation': 'Köln',
            'endLocation': 'Düsseldorf',
            'km': '50',
        },
        {
            'startDate': '19:02',
            'endDate': '16:15',
            'startLocation': 'Köln',
            'endLocation': 'Düsseldorf',
            'km': '50',
        },
        {
            'startDate': '10:02',
            'endDate': '14:15',
            'startLocation': 'Köln',
            'endLocation': 'Düsseldorf',
            'km': '50',
        },
        {
            'startDate': '10:02',
            'endDate': '11:15',
            'startLocation': 'Köln',
            'endLocation': 'Düsseldorf',
            'km': '50',
        },
        {
            'startDate': '13:02',
            'endDate': '16:15',
            'startLocation': 'Köln',
            'endLocation': 'Düsseldorf',
            'km': '50',
        },
        {
            'startDate': '18:02',
            'endDate': '19:15',
            'startLocation': 'Köln',
            'endLocation': 'Düsseldorf',
            'km': '50',
        },
    ]

    const platform = usePlatform();



    return (
        <>
            <Header navigation={navigation} title='Fahrtenbuch' subtitle='Account Settings' icon='arrow-left' subicons={subicons} platform={platform} />

            <ScrollView>

                <View style={{
                    marginLeft: style.RootMarginLeft,
                    marginRight: style.RootMarginRight,
                }}>

                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'start',
                        marginTop: 15,
                    }}>Today {today}</Text>

                    <Cizgi />
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        marginTop: 10,
                    }}>
                        {data && data.map((item, index) => {
                            return (
                                <View key={index} style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 15, flexDirection: 'row', display: 'flex', gap: 15, alignItems: "center", justifyContent: 'space-around' }}>

                                    <View>
                                        <Text style={style.ItemDate}>{item.startDate}</Text>
                                        <Text style={style.ItemDate}>{item.endDate}</Text>
                                    </View>

                                    <View style={{ width: '55%' }}>
                                        <Text>{item.startLocation}</Text>
                                        <Text>{item.endLocation}</Text>
                                    </View>

                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                        <Text>{item.km} KM </Text>
                                        <Icon name='angle-right' size={30} />
                                    </View>

                                </View>
                            )
                        })}
                    </View>

                    <Cizgi />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'start',
                        marginTop: 15,
                    }}>Yesterday 17.11.2023</Text>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        marginTop: 10,
                    }}>
                        {data && data.map((item, index) => {
                            return (
                                <View key={index} style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 15, flexDirection: 'row', display: 'flex', gap: 15, alignItems: "center", justifyContent: 'space-around' }}>

                                    <View>
                                        <Text style={style.ItemDate}>{item.startDate}</Text>
                                        <Text style={style.ItemDate}>{item.endDate}</Text>
                                    </View>

                                    <View style={{ width: '55%' }}>
                                        <Text>{item.startLocation}</Text>
                                        <Text>{item.endLocation}</Text>
                                    </View>

                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                        <Text>{item.km} KM </Text>
                                        <Icon name='angle-right' size={30} />
                                    </View>

                                </View>
                            )
                        })}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}