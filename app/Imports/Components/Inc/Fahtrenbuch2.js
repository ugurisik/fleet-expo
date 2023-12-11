import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Cizgi from "./Cizgi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import axios from "axios";
import Privathart from "../Inc/Icons";

import { Privat, Betriebsfahrt , Arbeitsweg , Mischfahrt} from '../Inc/Icons';

const Fahtrenbuch2 = ({ data }) => {
  const types = {
    1: "Privat",
    2: "Betriebsfahrt",
    3: "Arbeitsweg",
    4: "Mischfahrt",
  };

  const colors = {
    Privat: "#E93939",
    Betriebsfahrt: "#62B952",
    Arbeitsweg: "#F5A623",
    Mischfahrt: "#00B0FE",
  };

  const icons = {
    Privat: <Privat />,
    Betriebsfahrt: <Betriebsfahrt />,
    Arbeitsweg: <Arbeitsweg />,
    Mischfahrt: <Mischfahrt />,
  };

  const formattedDates = (date) => {
    let d = new Date(date);
    return `am ${d.getDate()}.${d.getMonth()}.${d.getFullYear()} um ${d.getHours()}:${d.getMinutes()} Uhr`;
  };

  return (
    <View>
      {data &&
        data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push({
                    pathname: "/Imports/Components/Pages/FahtrenAktarma",
                    params: item,
                  });
              }}
              style={{
                width: "100%",
                height: 100,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View>
                  <View
                    style={{
                      borderRadius: "50%",
                      width: 50,
                      height: 50,
                      backgroundColor: colors[types[item.Type]],
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {icons[types[item.Type]]}
                  </View>
                </View>

                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#505050",
                    }}
                  >
                    {types[item.Type]}
                  </Text>
                  <Text style={{ color: "#606060" }}>
                    {formattedDates(item.Date)}
                  </Text>
                </View>

                <View>
                  <Text style={{ color: "#6d6d6d" }}>{item.Km} KM</Text>
                </View>
              </View>
              <Cizgi margintop={15} />
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default Fahtrenbuch2;
