import React, { createContext, useState, useEffect } from "react";
import { Redirect, useRouter } from "expo-router";
import { View, Text } from "react-native";
import Mischfahrt from "./Imports/Components/Pages/Mischfahrt";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePushNotifications } from "./Imports/Hooks/usePushNotifications";

export const AuthContext = createContext();

export default function App() {
  usePushNotifications();

  const router = useRouter();

  const [user, setUser] = useState();

  const generateDeviceId = async () => {
    let device_id = await AsyncStorage.getItem("device_id");

    if (!device_id) {
      let id =
        Math.random().toString(36).substring(2, 15) +
        "-" +
        Math.random().toString(36).substring(2, 15) +
        "-" +
        Math.random().toString(36).substring(2, 15) +
        "-" +
        Math.random().toString(36).substring(2, 15);

      try {
        await AsyncStorage.setItem("device_id", id);
      } catch (error) {
        throw error;
      }
    }
  };

  const getUser = async () => {
    try {
      let user = await AsyncStorage.getItem("isLogged");

      if (user) {
        let token = await AsyncStorage.getItem("token");
        if (!token) {
          return router.push("Imports/Components/Pages/Loginpage");
        }

        console.log('Login with token: ', token);

        router.push("Imports/Components/Pages/Dashboard");
      } else {
        router.push("Imports/Components/Pages/Loginpage");
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // AsyncStorage.removeItem("token");
    // AsyncStorage.removeItem("isLogged");

    generateDeviceId();
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
    </AuthContext.Provider>
  );
}
