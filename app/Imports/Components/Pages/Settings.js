import React, { useState, useEffect, useCallback } from "react";
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
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../Inc/Header";
import { router } from "expo-router";
import { G, Path, Svg, Rect } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  const Logout = async () => {

    console.log('Attempting to logout user...');

    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("isLogged");
    router.push("/Imports/Components/Pages/Loginpage");

    console.log('User logged out successfully.');
  };

  return (
    <>
      <Header title="Einstellungen" icon="arrow-left" />

      <View
        style={{
          marginLeft: style.RootMarginLeft,
          marginRight: style.RootMarginRight,
          marginTop: 50,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 120,
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
            display: "flex",
            flexDirection: "col",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 2,
              borderBottomColor: colors.gray,
              paddingVertical: 10,
            }}
            onPress={() => {
              router.push("/Imports/Components/Pages/Accountsettings");
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#00d3c1",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Icon name="account-circle" size={30} color="#fff" />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: "gray",
                }}
              >
                Account Settings
              </Text>
            </View>
            <View>
              <Icon name="chevron-right" size={20} color={colors.primary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 2,
              borderBottomColor: colors.gray,
              paddingVertical: 10,
            }}
            onPress={() => {
              router.push("/Imports/Components/Pages/Mischfahrt");
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#2aabd3",
                  borderRadius: 100,
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <Svg
                  height="20"
                  width="20"
                  viewBox="0 0 217.762 217.762"
                  fill="#fff"
                >
                  <G id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <G
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <G id="SVGRepo_iconCarrier">
                    <Path d="M108.881,5.334C48.844,5.334,0,45.339,0,94.512c0,28.976,16.84,55.715,45.332,72.454 c-3.953,18.48-12.812,31.448-12.909,31.588l-9.685,13.873l16.798-2.153c1.935-0.249,47.001-6.222,79.122-26.942 c26.378-1.92,50.877-11.597,69.181-27.364c19.296-16.623,29.923-38.448,29.923-61.455C217.762,45.339,168.918,5.334,108.881,5.334z M115.762,168.489l-2.049,0.117l-1.704,1.145c-18.679,12.548-43.685,19.509-59.416,22.913c3.3-7.377,6.768-17.184,8.499-28.506 l0.809-5.292l-4.741-2.485C30.761,142.547,15,119.42,15,94.512c0-40.901,42.115-74.178,93.881-74.178s93.881,33.276,93.881,74.178 C202.762,133.194,164.547,165.688,115.762,168.489z" />
                  </G>
                </Svg>
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: "gray",
                }}
              >
                Placeholder
              </Text>
            </View>
            <View>
              <Icon name="chevron-right" size={20} color={colors.primary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 2,
              borderBottomColor: colors.gray,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "orange",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Icon name="notifications-none" size={30} color="#fff" />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: "gray",
                }}
              >
                Notifications
              </Text>
            </View>
            <View>
              <Icon name="chevron-right" size={20} color={colors.primary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottomWidth: 2,
              borderBottomColor: colors.gray,
              paddingVertical: 10,
            }}
            onPress={() => {
              router.push("/Imports/Components/Pages/Bet");
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#7ed321",
                  borderRadius: 100,
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 318.29 318.29"
                  fill="#fff"
                >
                  <G id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <G
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.6365860000000001"
                  />
                  <G id="SVGRepo_iconCarrier">
                    <G>
                      <Path d="M159.148,0c-52.696,0-95.544,39.326-95.544,87.662h47.736c0-22.007,21.438-39.927,47.808-39.927 c26.367,0,47.804,17.92,47.804,39.927v6.929c0,23.39-10.292,34.31-25.915,50.813c-20.371,21.531-45.744,48.365-45.744,105.899 h47.745c0-38.524,15.144-54.568,32.692-73.12c17.368-18.347,38.96-41.192,38.96-83.592v-6.929C254.689,39.326,211.845,0,159.148,0z" />
                      <Rect
                        x="134.475"
                        y="277.996"
                        width="49.968"
                        height="40.297"
                      />
                    </G>
                  </G>
                </Svg>
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: "gray",
                }}
              >
                Help Center
              </Text>
            </View>
            <View>
              <Icon name="chevron-right" size={20} color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderTopWidth: 2,
              borderTopColor: colors.gray,
              paddingVertical: 10,
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                Logout();
              }}
            >
              <View
                style={{
                  backgroundColor: "red",
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <Icon name="logout" size={30} color="#fff" />
              </View>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 20,
                  color: "gray",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
            <View>
              <Icon name="chevron-right" size={20} color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
