import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Image, ScrollView, TextInput, Text } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import usePlatform from "../../Hooks/usePlatform";
import { Link, router } from "expo-router";

export default function Header({ navigation, title, subtitle, icon, subicons }) {
    const platform = usePlatform();
    return (
        <>
            <View style={{
                backgroundColor: colors.primary,
                padding: 20,
                paddingTop: 50,
                width: '100%',


            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity onPress = {() => { router.back(); }} >
                        <Icon size={30} name={icon && icon} color='#fff' />
                    </TouchableOpacity>

                    <View style={{
                        marginLeft: 30,
                        width: '65%',
                    }}>
                        <Text style={[style.Title]}>{title && title}</Text>
                        {subtitle && <Text style={[style.SubTitle]}>{subtitle && subtitle}</Text>}
                    </View>


                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10
                    }}>
                        {subicons && subicons.length > 0 && subicons.map((item, index) => {
                            if (!item.icon) {
                                console.warn(`Item at index ${index} does not have an icon.`);
                                return null;
                            }
                            return (
                                <TouchableOpacity key={index}>
                                    <Icon size={30} name={item.icon} color='#fff' />
                                </TouchableOpacity>
                            );
                        })}</View>

                </View>

            </View >


        </>
    )
}