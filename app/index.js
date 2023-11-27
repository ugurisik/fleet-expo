import React, { createContext, useState, useEffect } from 'react';
import { Redirect } from 'expo-router';
import { View } from 'react-native';
import Mischfahrt from './Imports/Components/Pages/Mischfahrt';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';

export const AuthContext = createContext();

export default function App() {
    const [user, setUser] = useState(false);

    // useEffect(() => {
    //     const checkUser = () => {
    //         setUser(true);
    //     }

    //     checkUser();
    // })

    return (
        // <View style={{ flex: 1, alignItems: 'center', margin: 0 }}>
        //     <LottieView
        //         source={require('./Imports/Components/Animations/Loading.json')}
        //         autoPlay
        //         loop={true}
        //         resizeMode='cover'
        //     />
        // </View>

        <AuthContext.Provider value={{ user, setUser }}>
            <StatusBar hidden />
            {user ? <Redirect href="Imports/Components/Pages/Dashboard" /> : <Redirect href="Imports/Components/Pages/Loginpage" />}
        </AuthContext.Provider>
    );
}