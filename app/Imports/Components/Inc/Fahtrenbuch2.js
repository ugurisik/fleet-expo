import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cizgi from './Cizgi';

const Fahtrenbuch2 = ({ props }) => {
    return (
        <>
            <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                <View >
                    <View style={{
                        borderRadius: '50%',
                        width: 65,
                        height: 65,
                        backgroundColor: props.background ? props.background : '#000',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon size={30} name={props.icon ? props.icon : 'question'} color='#fff' />
                    </View>
                </View>

                <View style={{ width: '60%' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.title ? props.title : '???'}</Text>
                    <Text>{props.subtitle ? props.subtitle : '???'}</Text>
                </View>

                <View>
                    <Text>{props.km ? props.km : 0} KM</Text>
                </View>
            </View>
            <Cizgi />
        </>
    );
};

export default Fahtrenbuch2;
