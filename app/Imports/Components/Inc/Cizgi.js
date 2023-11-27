import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";


export default function Cizgi({ margintop }) {

    return (
        <>
            <View style={{
                borderBottomColor: '#e0e0e0',
                borderBottomWidth: 1,
                marginTop: margintop ? margintop : 0
            }}></View>
        </>
    )
}