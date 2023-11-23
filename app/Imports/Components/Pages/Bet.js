import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import Config from '../../../Config/Config';
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from "../Inc/Header";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Bet() {
    const platform = usePlatform();

    return (
        <>
            <Header navigation={1} title='Fahrtenbuch' icon='arrow-left' platform={platform} />
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
                    justifyContent: "center",
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
            <View style={{
                display: "flex",
                width: "100%",

                height: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                zIndex: 2,
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
                marginTop: 5,

            }}>

                <Text style={{
                    fontWeight: "bold",
                }}>23 Minuten . 1 Stopp . 142 Kilometer</Text>
            </View>
            <View style={{
                gap: 10,
                padding: 10,

                marginTop: 30,
            }}>
                <Text style={{
                    color: "gray",
                }}>Geschaftspartner</Text>
                <TextInput style={{
                    borderBottomWidth: 2,
                    borderBottomColor: colors.gray,
                    paddingVertical: 5,
                }}></TextInput>

                <Text style={{
                    color: "gray",
                }}>Firma</Text>
                <TextInput style={{
                    borderBottomWidth: 2,
                    borderBottomColor: colors.gray,
                    paddingVertical: 5,
                }}></TextInput>

                <Text style={{
                    color: "gray",
                }}>Anlass</Text>
                <TextInput style={{
                    borderBottomWidth: 2,
                    borderBottomColor: colors.gray,
                    paddingVertical: 5,
                }}></TextInput>

                <Text style={{
                    color: "gray",
                }}>Fahrer/in</Text>
                <TextInput style={{
                    borderBottomWidth: 2,
                    borderBottomColor: colors.gray,
                    paddingVertical: 5,
                }}></TextInput>

                <Text style={{
                    color: "gray",
                }}>Bemerkung (optional)</Text>
                <TextInput style={{
                    borderBottomWidth: 2,
                    borderBottomColor: colors.gray,
                    paddingVertical: 5,
                }}></TextInput>
            </View>
            <View style={{
                width: "100%",
                height:"15%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width:"90%",
                }}>
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
            <View style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <TouchableOpacity style={{
                    width: "95%",
                    backgroundColor: "green",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",

                    borderRadius: 5,

                }}>
                    <View style={{
                        width: "25%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: 10
                    }}>
                        <Icon style={{}} name='directions-car' size={30} color="#fff" />
                        <Text style={{ color: "#fff" }}>|</Text>
                    </View>
                    <View style={{
                        width: "75%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            color: "#fff"

                        }}>Betriebsfahrt spiechern</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}