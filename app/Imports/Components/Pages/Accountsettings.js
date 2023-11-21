import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import Header from "../Inc/Header";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cizgi from "../Inc/Cizgi";

export default function Accountsettings() {
    const platform = usePlatform();
    const navigation = 1;
    return (
        <>
            <Header navigation={navigation} title='Fahrtenbuch' subtitle='Account Settings' icon='arrow-left' platform={platform} />

            <View style={{
                marginLeft: style.RootMarginLeft,
                marginRight: style.RootMarginRight,
                marginTop: platform == 'ios' ? 50 : 50,
                gap: 15,
            }}>

                <TouchableOpacity style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                    <Text>Privacy Policy</Text>
                    <Icon name="chevron-right" size={20} color={colors.primary} />
                </TouchableOpacity>

                <Cizgi />

                <TouchableOpacity style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                    <Text>Application Security</Text>
                    <Icon name="chevron-right" size={20} color={colors.primary} />
                </TouchableOpacity>

                <Cizgi />

                <View style = {{ gap : 15 }}>
                    <View style = {{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontWeight : "bold" }}>Name</Text>
                        <Text style = {{ color : colors.aqua , fontWeight : "bold"  }}>Edit</Text>
                    </View>
                    <Text style={{ color: colors.muted }}>John Doe</Text>
                </View>

                <Cizgi />

                
                <View style = {{ gap : 15 }}>
                    <View style = {{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontWeight : "bold" }}>Change Number</Text>
                        <Text style = {{ color : colors.aqua  , fontWeight : "bold" }}>Edit</Text>
                    </View>
                    <Text style={{ color: colors.muted }}>+00 1234 5678</Text>
                </View>

                <TouchableOpacity style={{ display: "flex", justifyContent: "space-around", flexDirection: 'row', borderRadius: 5, borderWidth: 1, padding: 15, borderColor: colors.muted }}>
                    <Text style={{ color: colors.red , fontWeight : "bold" }}>Delete Number</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}