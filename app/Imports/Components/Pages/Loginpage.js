import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import { router } from "expo-router";

export default function Loginpage() {
    const platform = usePlatform();

    const handleLogin = () => {
        router.push('/Imports/Components/Pages/Dashboard');
    }

    useEffect(() => {
        console.log(123);
    }, [])

    return (
        <>
            <View style={{
                marginLeft: style.RootMarginLeft,
                marginRight: style.RootMarginRight,
                marginTop: platform == 'ios' ? 50 : 50,
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
                    <Image style={{ width: 100, height: 100, }} source={{ uri: 'https://safarigmbh.de/wp-content/uploads/2023/06/cropped-gps-icon-192x192.png' }} />
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
                            borderRadius: 10,
                            width: "100%",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,
                            elevation: 20,
                        }}
                            onPress={() => { handleLogin() }}
                        >
                            <Text style={{
                                fontSize: style.fontSize,
                                fontWeight: style.fontWeight,
                                textAlign: "center",
                                color: colors.white,
                            }}>Einloggen</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{
                                color: colors.primary,
                                textAlign: "center"
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