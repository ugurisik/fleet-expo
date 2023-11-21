import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from "../Inc/Header";
import { router } from 'expo-router';


export default function Settings() {
    const platform = usePlatform();

    return (
        <>
            <Header navigation={1} title='Fahrtenbuch' icon='arrow-left' platform={platform} />

            <View style={{
                marginLeft: style.RootMarginLeft,
                marginRight: style.RootMarginRight,
                marginTop: platform == 'ios' ? 50 : 50,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 120,
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
                    display: "flex",
                    flexDirection: "col",
                    gap: 10,
                }}>
                    <TouchableOpacity style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottomWidth: 2,
                        borderBottomColor: colors.gray,
                        paddingVertical: 10,
                    }}
                        onPress={() => {
                            router.push('/Imports/Components/Pages/Accountsettings');
                        }}
                    >
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{
                                backgroundColor: "aqua",
                                borderRadius: 100,
                                padding: 5
                            }}>
                                <Icon name='account-circle' size={30} color='#fff' />
                            </View>
                            <Text style={{
                                marginLeft: 15,
                                fontSize: 20,
                                color: "gray"
                            }}>
                                Account Settings
                            </Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={20} color={colors.primary} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottomWidth: 2,
                        borderBottomColor: colors.gray,
                        paddingVertical: 10,

                    }}
                        onPress={() => {
                            router.push('/Imports/Components/Pages/Mischfahrt');
                        }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{
                                backgroundColor: "blue",
                                borderRadius: 100,
                                padding: 5
                            }}>
                                <Icon name='message' size={30} color='#fff' />
                            </View>
                            <Text style={{
                                marginLeft: 15,
                                fontSize: 20,
                                color: "gray"
                            }}>
                                Placeholder
                            </Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={20} color={colors.primary} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottomWidth: 2,
                        borderBottomColor: colors.gray,
                        paddingVertical: 10,

                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{
                                backgroundColor: "orange",
                                borderRadius: 100,
                                padding: 5
                            }}>
                                <Icon name='notifications-none' size={30} color='#fff' />
                            </View>
                            <Text style={{
                                marginLeft: 15,
                                fontSize: 20,
                                color: "gray"
                            }}>
                                Notifications
                            </Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={20} color={colors.primary} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottomWidth: 2,
                        borderBottomColor: colors.gray,
                        paddingVertical: 10,

                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "green",
                                borderRadius: 100,
                                pardingVertical: 10,
                                paddingHorizontal: 10,
                            }}>
                                <Icon style={{ marginBottom: 5, }} name='question-mark' size={30} color='#fff' />
                            </View>
                            <Text style={{
                                marginLeft: 15,
                                fontSize: 20,
                                color: "gray"
                            }}>
                                Help Center
                            </Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={20} color={colors.primary} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTopWidth: 2,
                        borderTopColor: colors.gray,
                        paddingVertical: 10,

                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <View style={{
                                backgroundColor: "red",
                                borderRadius: 100,
                                padding: 5
                            }}>
                                <Icon name='logout' size={30} color='#fff' />
                            </View>
                            <Text style={{
                                marginLeft: 15,
                                fontSize: 20,
                                color: "gray"
                            }}>
                                Logout
                            </Text>
                        </View>
                        <View>
                            <Icon name="chevron-right" size={20} color={colors.primary} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}