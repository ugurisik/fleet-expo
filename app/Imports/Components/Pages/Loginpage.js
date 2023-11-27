import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import { router } from "expo-router";

export default function Loginpage() {
    

    const handleLogin = () => {
        router.push('/Imports/Components/Pages/Dashboard');
    }

    return (
        <>
            <View style={{
                marginLeft: style.RootMarginLeft,
                marginRight: style.RootMarginRight,
                marginTop: 50,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-around",
                alignContent: 'center'
            }}>

                <View style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center'
                }}>
                    <Image style={{ width: '100%', height: 60, }} source={require('../../../../assets/fleetlogo.png')} />
                </View>
                <View style={{
                    gap: 10,
                }}>
                    <Text style={{
                        color: colors.primary,
                    }}>Email</Text>
                    <TextInput style={{
                        borderBottomWidth: 2,
                        borderBottomColor: colors.gray,
                        paddingVertical: 5,
                    }}></TextInput>
                    <Text style={{
                        color: colors.primary,
                    }}>Passwort</Text>
                    <TextInput style={{
                        borderBottomWidth: 2,
                        borderBottomColor: colors.gray,
                        paddingVertical: 5,
                    }}></TextInput>
                </View>


                <View style={{
                    gap: 50,
                    height: "20%",

                }}>
                    <View>

                        <TouchableOpacity style={{
                            backgroundColor: colors.primary,
                            paddingVertical: 20,
                            borderRadius: 5,
                            width: "100%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 5.16,
                            elevation: 20,
                        }}
                            onPress={() => { handleLogin() }}
                        >
                            <Text style={{
                                fontSize: 16,
                                textAlign: "center",
                                color: colors.white,
                            }}>Einloggen</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{
                                color: colors.primary,
                                textAlign: "center",
                                fontSize:14
                            }}>
                                Passwort vergessen?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}