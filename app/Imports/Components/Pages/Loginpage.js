import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Config from "../../../Config/Config";
import colors from "../../../Config/Colors/colors";
import style from "../../../Config/Style/style";
import usePlatform from "../../Hooks/usePlatform";
import { router } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default function Loginpage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (text) => {
    dispatch({ type: "SET_EMAIL", payload: text });
  };

  const handlePasswordChange = (text) => {
    dispatch({ type: "SET_PASSWORD", payload: text });
  };

  const setUser = async (token , isLogged) => {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("isLogged", isLogged.toString());
  }

  const handleLogin = async () => {
    let { email, password } = state;

    let device_id = await AsyncStorage.getItem("device_id");
    let push_token = 1;

    let url = `https://safari-gps.live/func/fn_fleet.php?api=true&cmd=react_app_login&device_id=${device_id}&username=${email}&password=${password}&push_token=${push_token}`;

    const response = await axios({
      url: url,
      method: "GET",
    });

    if (response.data.status === 1) {
      let token = response.data?.token;
      setUser(token, true);

      console.log('Login success Token : ' , token)

      router.push("Imports/Components/Pages/Dashboard");
    }
  };

  return (
    <>
      <View
        style={{
          marginLeft: style.RootMarginLeft,
          marginRight: style.RootMarginRight,
          marginTop: 50,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: 60 }}
            source={require("../../../../assets/fleetlogo.png")}
          />
        </View>
        <View
          style={{
            gap: 10,
          }}
        >
          <Text
            style={{
              color: colors.primary,
            }}
          >
            Email
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderBottomColor: colors.gray,
              paddingVertical: 5,
            }}
            value={state.username}
            onChangeText={handleEmailChange}
          ></TextInput>
          <Text
            style={{
              color: colors.primary,
            }}
          >
            Passwort
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderBottomColor: colors.gray,
              paddingVertical: 5,
            }}
            value={state.password}
            onChangeText={handlePasswordChange}
          ></TextInput>
        </View>

        <View
          style={{
            gap: 50,
            height: "20%",
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                paddingVertical: 20,
                borderRadius: 5,
                width: "100%",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.3,
                shadowRadius: 5.16,
                elevation: 20,
              }}
              onPress={() => {
                handleLogin();
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: colors.white,
                }}
              >
                Einloggen
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  color: colors.primary,
                  textAlign: "center",
                  fontSize: 14,
                }}
              >
                Passwort vergessen?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
