import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../Config/Colors/colors';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../../../Config/Style/style';

import Slider from '@react-native-community/slider';


export default function Iconkutu({ props }) {
    console.log(props)
    const [value, setValue] = useState(props.km ? props.km : 0);

    return (
        <>
            <View style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row'
            }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                    <View style={[style.IconKutu, { backgroundColor: props.background }]}>
                        <Icon name={props.icon && props.icon} size={25} color={colors.white} />
                    </View>
                    <Text style  = {{ color : props.background}}>{props.title && props.title}</Text>
                </View>

                <View style={{ width: '65%' }}>
                    <Slider
                        value={value}
                        onValueChange={setValue}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor={props.background ? props.background : colors.primary}
                        maximumTrackTintColor="white"
                        thumbTintColor={props.background ? props.background : colors.primary}
                        style={{
                            transform: [{ scaleY: 1 }],
                        }}
                        step={1}
                    />
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold' }}>{value} KM</Text>
                </View>

            </View>
        </>
    )
}
