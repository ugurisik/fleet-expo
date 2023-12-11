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
import Icon from "react-native-vector-icons/FontAwesome5";
import Fahtrenbuch2 from "../Inc/Fahtrenbuch2";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Fahrtenbuch() {
  const [data, setData] = useState([]);

    const getData = async () => {   
        const response = await axios({
            method: 'get',
            url : 'https://safari-gps.live/func/fn_fleet.php?cmd=get_setted_trips&token=125216'
        });

        setData(response.data.trips);
    }

    useEffect(() => {
        getData();
    },[]);

  return (
    <>
      <Header title={"Fahrtenbuch"} icon={"arrow-left"} />
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
          marginTop: 25,
          gap: 15,
        }}
      >
        <Fahtrenbuch2 data={data} />
      </View>
    </>
  );
}
