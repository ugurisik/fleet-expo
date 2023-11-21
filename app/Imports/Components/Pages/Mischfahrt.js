import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import Header from "../Inc/Header";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cizgi from "../Inc/Cizgi";

import Iconkutu from "../Inc/Iconkutu";
import BouncyCheckbox from "react-native-bouncy-checkbox";





export default function Mischfahrt() {

    function divideNumberIntoThree(total) {
        let first = Math.floor(Math.random() * total);
        let second = Math.floor(Math.random() * (total - first));
        let third = total - first - second;

        return [first, second, third];
    }

    const [parts, setParts] = useState(divideNumberIntoThree(101));




    return (
        <>
            <Header title={'Mischfahrt'} subtitle={'142 Kilometer'} icon={'arrow-left'} />
            <View style={{
                gap: 15, flexDirection: 'row', marginLeft: style.RootMarginLeft,
                marginRight: style.RootMarginRight,
                paddingVertical: 15,
            }}> 
                <View style={{ flexDirection: 'column', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={'caret-down'} size={15} color={colors.primary} />
                    <Icon name={'map-marker-alt'} size={15} color={colors.red} />
                </View>
                <View style={{ gap: 15 }}>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <Text style={{ fontWeight: 'bold' }}>14.02</Text>
                        <Text>Adres A, Postakodu 123 Sehir X</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 15 }}>
                        <Text style={{ fontWeight: 'bold' }}>15.02</Text>
                        <Text>Adres B, Postakodu 456 Sehir Y</Text>
                    </View>
                </View>
            </View>
            <View>
                <Cizgi />

                <View style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 6,
                    width: '100%',
                    padding: 10,
                    backgroundColor: '#e8e8e8'
                }}>
                    <Text style={{ textAlign: 'center' }}>23 Minuten ● 1 Stopps ● 142 Kilometer</Text>
                </View>
            </View>

            <View style={{ padding: 10, marginTop: 15, gap: 15 }}>
                <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold' }}>Verbleibende Kilometer</Text>
                    <Text style={{ fontWeight: 'bold' }}>101 KM</Text>
                </View>

                <Iconkutu props={{
                    km: parts[0].toString(),
                    background: 'red',
                    icon: 'car',
                    title: 'test'
                }} />

                <Iconkutu props={{
                    km: parts[1].toString(),
                    background: 'black',
                    icon: 'car',
                    title: 'test'
                }} />

                <Iconkutu props={{
                    km: parts[2].toString(),
                    background: 'blue',
                    icon: 'car',
                    title: 'test'
                }} />

                <Cizgi />

                <View>
                    <View>
                        <Text>Fahrer/in</Text>
                        <TextInput></TextInput>
                    </View>
                    <View>
                        <Text>Bemerkung (optional)</Text>
                        <TextInput style = {{
                            backgroundColor : 'redj'
                        }}></TextInput>
                    </View>
                    <View>
                        <BouncyCheckbox
                            size={25}
                            fillColor={colors.primary}
                            unfillColor="#FFFFFF"
                            text="Als Safari Fleet Kontakt speichern"
                            iconStyle={{ borderColor: colors.primary }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={(isChecked) => { }}
                        />
                    </View>
                </View>


            </View >
        </>
    )
}