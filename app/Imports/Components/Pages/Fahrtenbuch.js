import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import Header from "../Inc/Header";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fahtrenbuch2 from "../Inc/Fahtrenbuch2";
import axios from 'axios';

export default function Fahrtenbuch() {




    return (
        <>
            <Header title={'Fahrtenbuch'} icon={'arrow-left'} />
            <View style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 25,
                gap: 15
            }}>
                <Fahtrenbuch2 props={{
                    background: 'red',
                    icon: 'car',
                    title: 'Privfahrt',
                    subtitle: 'am 13.11.2023 um 11.24 Uhr',
                    km: '66'
                }} />

                <Fahtrenbuch2 props={{
                    background: 'green',
                    icon: 'marker',
                    title: 'Privfahrt 2 2',
                    subtitle: 'am 13.11.2023 um 11.24 Uhr',
                    km: '424'
                }} />

            </View>
        </>
    )
}