import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cizgi from './Cizgi';
import { router } from 'expo-router';

const Fahtrenbuch2 = ({ props }) => {
    return (
        <>
            <TouchableOpacity onPress={() => {
                router.push('/Imports/Components/Pages/Tod', { id: 1 })
            }}>
                <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'  }}>
                    <View >
                        <View style={{
                            borderRadius: '50%',
                            width: 50,
                            height: 50,
                            backgroundColor: props.background ? props.background : '#000',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon size={20} name={props.icon ? props.icon : 'question'} color='#fff' />
                        </View>
                    </View>

                    <View style={{ width: '60%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#505050' }}>{props.title ? props.title : '???'}</Text>
                        <Text style={{ color: '#606060' }}>{props.subtitle ? props.subtitle : '???'}</Text>
                    </View>

                    <View>
                        <Text style={{ color: '#6d6d6d' }}>{props.km ? props.km : 0} KM</Text>
                    </View>
                </View>
                <Cizgi margintop={15} />
            </TouchableOpacity>
        </>
    );
};

export default Fahtrenbuch2;
