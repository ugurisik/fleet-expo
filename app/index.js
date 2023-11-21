import React, { createContext, useState, useEffect } from 'react';
import { Redirect } from 'expo-router';

import Mischfahrt from './Imports/Components/Pages/Mischfahrt';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';

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
        <AuthContext.Provider value={{ user, setUser }}>
            <StatusBar hidden />
            {user ? <Redirect href="Imports/Components/Pages/Dashboard" /> : <Redirect href="Imports/Components/Pages/Loginpage" />}
        </AuthContext.Provider>
    );
}