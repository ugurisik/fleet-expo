import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Image, ScrollView, TextInput, Text, Alert } from "react-native";
import Config from '../../../Config/Config';
import Header from "../Inc/Header";
import style from "../../../Config/Style/style";
import Cizgi from "../Inc/Cizgi";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, { Path } from 'react-native-svg';
import colors from "../../../Config/Colors/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { router } from "expo-router";

export default function Drivesheet() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const [clickedItems, setClickedItems] = useState([]);

    const handleCheck = (type, index) => {
        if (type == 'checked') {
            setClickedItems([...clickedItems, index]);
        } else {
            setClickedItems(clickedItems.filter((item) => item !== index));
        }
    }

    const subicons = [
        // { icon: 'link', isClickable: true, event: 'select' },
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

    const showAlert = () => {
        Alert.alert('Wichtig', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s')

    }

    useEffect(() => {
        showAlert();
    }, []);


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
                    <TouchableOpacity onPress={() => { router.back(); }} >
                        <Svg fill="#ffffff" height={30} width="30" viewBox="0 0 460.775 460.775" >
                            <Path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                        </Svg>
                    </TouchableOpacity>

                    <View style={{
                        marginLeft: 30,
                        width: '65%',
                    }}>
                        <Text style={[style.Title]}>Fahrten verbinden</Text>
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
                                item.isClickable ?
                                    <TouchableOpacity key={index} onPress={() => {
                                        setIsButtonClicked(!isButtonClicked);
                                    }} >
                                        <Icon size={30} name={item.icon} color='#fff' />
                                    </TouchableOpacity>
                                    :
                                    <View key={index}>
                                        <Icon size={30} name={item.icon} color='#fff' />
                                    </View>
                            );
                        })}</View>

                </View>

            </View >

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
                                <TouchableOpacity key={index} style={{ backgroundColor: '#e8e8e8', borderRadius: 5, padding: 15, flexDirection: 'row', display: 'flex', gap: 15, alignItems: "center", justifyContent: 'space-around' }}>
                                    <BouncyCheckbox
                                        size={25}
                                        fillColor={colors.primary}
                                        unfillColor="#FFFFFF"
                                        text=""
                                        iconStyle={{ borderColor: colors.primary }}
                                        innerIconStyle={{ borderWidth: 2 }}
                                        onPress={(isChecked) => {
                                            handleCheck(isChecked ? 'checked' : 'unchecked', index);
                                        }}
                                    />

                                    <View>
                                        <Text style={style.ItemDate}>{item.startDate}</Text>
                                        <Text style={style.ItemDate}>{item.endDate}</Text>
                                    </View>

                                    <View style={{ width: '50%' }}>
                                        <Text>{item.startLocation}</Text>
                                        <Text>{item.endLocation}</Text>
                                    </View>

                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                        <Text>{item.km} KM </Text>
                                        <Icon name='angle-right' size={30} />
                                    </View>

                                </TouchableOpacity>
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

            <View style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                backgroundColor: "#fff",
                borderTopStartRadius: 50,
                borderTopEndRadius: 50,
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                elevation: 24,
                paddingBottom: 30,
            }}>
                <View style = {{
                    paddingTop:10
                }}>
                    <Text style = {{
                        textAlign: 'center',
                        color:clickedItems.length > 1 ? colors.primary : 'red',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}>{ clickedItems.length > 1 ? 'Ausgewahlte (' + clickedItems.length + ') Fahrten verbinden'  : 'Wahlen sie mindestens zwe ! Fahrten aus ' } </Text>
                </View>
                <View style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent:'center',
                    gap:15,
                    marginTop: 20
                }}>
                    <View style={{
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            borderRadius: 100,
                            padding: 10,
                            backgroundColor: "red",
                            width: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Icon style={{}} name='shopping-bag' size={30} color="#fff" />
                        </View>
                        <Text style={{ color: "red", marginTop: 10 }}>Privatfahrt</Text>
                    </View>
                    <View style={{
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            borderRadius: 100,
                            padding: 10,
                            backgroundColor: "green",
                            width: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Icon style={{}} name='shopping-bag' size={30} color="#fff" />
                        </View>
                        <Text style={{ color: "green", marginTop: 10, }}>bu cok uzun</Text>
                    </View>
                    <View style={{
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            borderRadius: 100,
                            padding: 10,
                            backgroundColor: "orange",
                            width: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Icon style={{}} name='shopping-bag' size={30} color="#fff" />
                        </View>
                        <Text style={{ color: "orange", marginTop: 10 }}>Arbeistweg</Text>
                    </View>
                    <View style={{
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            borderRadius: 100,
                            padding: 10,
                            backgroundColor: colors.primary,
                            width: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Icon style={{}} name='shopping-bag' size={30} color="#fff" />
                        </View>
                        <Text style={{ color: colors.primary, marginTop: 10, }}>Mischfahrt</Text>
                    </View>
                </View>
            </View>
        </>
    )
}