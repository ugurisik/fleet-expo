import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import Header from "../Inc/Header";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cizgi from "../Inc/Cizgi";

export default function Accountsettings() {
    return (
        <>
            <Header  title='Fahrtenbuch' subtitle='Account Settings' icon='arrow-left' />

            <View style={{
                marginLeft: 15,
                marginRight: 15,
                marginTop: 50,
                gap: 15,
            }}>

                <TouchableOpacity style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                    <Text style = {{ color : '#7b7b7b' }}>Privacy Policy</Text>
                    <Icon name="chevron-right" size={20} color={'#adb3c8'} />
                </TouchableOpacity>

                <Cizgi />

                <TouchableOpacity style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                    <Text style = {{ color : '#7b7b7b' }}>Application Security</Text>
                    <Icon name="chevron-right" size={20} color={'#adb3c8'} />
                </TouchableOpacity>

                <Cizgi />

                <View style = {{ gap : 15 }}>
                    <View style = {{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontWeight : "bold", color:'#505050' }}>Name</Text>
                        <Text style = {{ color : colors.aqua , fontWeight : "bold"  }}>Edit</Text>
                    </View>
                    <Text style={{ color: '#c8cddc' }}>John Doe</Text>
                </View>

                <Cizgi />

                
                <View style = {{ gap : 15 }}>
                    <View style = {{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontWeight : "bold", color:'#505050' }}>Change Number</Text>
                        <Text style = {{ color : colors.aqua  , fontWeight : "bold" }}>Edit</Text>
                    </View>
                    <Text style={{ color: '#c8cddc' }}>+00 1234 5678</Text>
                </View>

                <TouchableOpacity style={{ display: "flex", justifyContent: "space-around", flexDirection: 'row', borderRadius: 5, borderWidth: 1, padding: 15, borderColor: '#e6e8ee' }}>
                    <Text style={{ color: colors.red , fontWeight : "bold" }}>Delete Number</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}