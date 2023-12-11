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
import Header from "../Inc/Header";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { router, useLocalSearchParams } from "expo-router";
import Cizgi from "../Inc/Cizgi";
import Icon from "react-native-vector-icons/FontAwesome5";
import Svg, { Path } from "react-native-svg";

export default function Bet() {
  const item = useLocalSearchParams();

  return (
    <>
      <Header title="Fahrtenbuch" icon="arrow-left" />
      <View
        style={{
          gap: 15,
          flexDirection: "row",
          marginLeft: style.RootMarginLeft,
          marginRight: style.RootMarginRight,
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            gap: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name={"caret-down"} size={15} color={colors.primary} />
          <Icon name={"map-marker-alt"} size={15} color={colors.red} />
        </View>
        <View style={{ gap: 15 }}>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Text style={{ fontWeight: "bold" }}>14.02</Text>
            <Text>Adres A, Postakodu 123 Sehir X</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Text style={{ fontWeight: "bold" }}>15.02</Text>
            <Text>Adres B, Postakodu 456 Sehir Y</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 6,
          width: "100%",
          padding: 10,
          backgroundColor: "#e8e8e8",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {item.Km + " Kilometer"}
        </Text>
      </View>

      <View
        style={{
          gap: 10,
          paddingRight: 25,
          paddingLeft: 25,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "gray",
          }}
        >
          Geschaftspartner
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.gray,
            paddingVertical: 5,
          }}
        ></TextInput>

        <Text
          style={{
            color: "gray",
          }}
        >
          Firma
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.gray,
            paddingVertical: 5,
          }}
        ></TextInput>

        <Text
          style={{
            color: "gray",
          }}
        >
          Anlass
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.gray,
            paddingVertical: 5,
          }}
        ></TextInput>

        <Text
          style={{
            color: "gray",
          }}
        >
          Fahrer/in
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.gray,
            paddingVertical: 5,
          }}
        ></TextInput>

        <Text
          style={{
            color: "gray",
          }}
        >
          Bemerkung (optional)
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.gray,
            paddingVertical: 5,
          }}
        ></TextInput>
      </View>
      <View
        style={{
          width: "100%",
          height: "15%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
          }}
        >
          <BouncyCheckbox
            size={25}
            // make it square
            iconStyle={{ borderRadius: 5 }}
            fillColor={colors.primary}
            unfillColor="#FFFFFF"
            text="Als Safari Fleet Kontakt speichern"
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isChecked) => {}}
          />
        </View>
      </View>
      <TouchableOpacity style={{ marginHorizontal: 25 }}>
        <View
          style={{
            width: "100%",
            height: 60,
            borderRadius: 10,
            backgroundColor: "#62b952",
            justifyContent: "space-evenly",
            flexDirection: "row",
            gap:15,
            alignItems: "center",
          }}
        >
          <View>
            <Svg height={30} width={30} viewBox="0 -104 512 512" fill={"#fff"}>
              <Path d="m365 3.015625c44.390625 10.300781 61.371094 36.257813 82.660156 71.984375h-82.660156zm-259.421875 74.984375c8.691406 0 15 4.195312 15 14 0 8.269531-6.691406 14.976562-14.957031 15h-90.621094c-8.285156 0-15 6.71875-15 15 0 8.285156 6.714844 15 15 15h135c8.363281 0 15.058594 6.710938 15.058594 15 0 8.285156-6.714844 15-15 15h-135.058594c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h33v45c0 8.285156 6.714844 15 15 15h30.152344c5.375 26.476562 28.769531 46 56.347656 46s50.972656-19.523438 56.347656-46h152.304688c5.375 26.476562 28.769531 46 56.347656 46s50.972656-19.523438 56.347656-46h26.152344c8.285156 0 15-6.714844 15-15v-90c0-44.011719-46.421875-46.933594-46.464844-47h-115.535156c-8.285156 0-15-6.714844-15-15v-90h-272c-8.285156 0-15 6.714844-15 15v33h-18c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15zm328.367187 148.054688c10.738282 10.738281 10.738282 28.15625 0 38.894531-17.273437 17.273437-46.945312 4.984375-46.945312-19.449219 0-24.429688 29.671875-36.71875 46.945312-19.445312zm-265 0c10.738282 10.738281 10.738282 28.15625 0 38.894531-17.273437 17.273437-46.945312 4.984375-46.945312-19.449219 0-24.429688 29.671875-36.71875 46.945312-19.445312zm0 0"></Path>
            </Svg>
          </View>

          <Text style ={{ color : '#fff' , fontSize: 15}}>
          | 
          </Text>

          <View style = {{ width : '65%'}}>
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Betriebsfahrt Speichern
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
