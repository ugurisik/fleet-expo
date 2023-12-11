import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Text,
  Dimensions,
} from "react-native";
import Config from "../../../Config/Config";
import Header from "../Inc/Header";
import style from "../../../Config/Style/style";
import Cizgi from "../Inc/Cizgi";
import Icon from "react-native-vector-icons/FontAwesome5";
import colors from "../../../Config/Colors/colors";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { Navigator, useRouter } from "expo-router";
import { router } from "expo-router";
import { useNavigation } from "expo-router";
import Svg, { Path } from "react-native-svg";
import useTokenControl from "../../Hooks/useTokenControl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FadeInView from "../../../Config/Style/FadeInView";
import Fahtrenbuch2 from "../Inc/Fahtrenbuch2";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import Privathart from "../Inc/Privathart";
import axios from "axios";

export default function Dashboard() {
  const data = [
    {
      icon: "biohazard",
      title: "Privatfahrt",
      subtitle: "am 13.11.2023 um 12:00 Uhr",
      km: "19",
    },
    {
      icon: "car",
      title: "Betriebsfahrt",
      subtitle: "am 13.11.2023 um 12:00 Uhr",
      km: "66",
    },
    {
      icon: "briefcase",
      title: "Sicherheitsbericht",
      subtitle: "am 13.11.2023 um 12:00 Uhr",
      km: "23",
    },
  ];
  const mapStyle = require("../../../../mapstyle.json");
  const status = useTokenControl();
  const router = useRouter();

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const removeLogin = async () => {
      await AsyncStorage.removeItem("isLogged");
      await AsyncStorage.removeItem("token");
    };

    const removeUser = async () => {
      if (status === 0) {
        await removeLogin().then(() => {
          console.log("Login removed");
          router.push("/Imports/Components/Pages/Loginpage");
        });
      }
    };

    removeUser();
  }, [status]);

  useEffect(() => {
    const FetchPie = async () => {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        await AsyncStorage.removeItem("isLogged");
        await AsyncStorage.removeItem("token");

        router.push("/Imports/Components/Pages/Loginpage");
        return;
      }

      const response = await axios({
        method: "GET",
        url: `https://safari-gps.live/func/fn_fleet.php?cmd=pie_report&token=${token}`,
      });

      let colors = {
        Privatfahrten: "#E93939",
        Betriebsfahrten: "#62B952",
        Arbeitsweg: "#F5A623",
        Frei: "#d0d0d0",
      };

      const pieData = Object.entries(response.data).map(
        ([name, population]) => ({
          name,
          population,
          color: colors[name],
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        })
      );

      setChartData(pieData);
    };

    FetchPie();
  }, []);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <>
      <FadeInView>
        <StatusBar hidden />
        <View
          style={{
            backgroundColor: colors.primary,
            paddingTop: 30,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 70,
                backgroundColor: colors.primary,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 25,
                  paddingHorizontal: 15,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Icon name="user-circle" size={30} color="#fff" />
                </View>

                <View style={{ width: "75%", justifyContent: "center" }}>
                  <Text style={[style.Title, { fontSize: 12 }]}>
                    Guten Morgen
                  </Text>
                  <Text style={[style.Title, { fontSize: 16 }]}>
                    Tarik Önal
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    router.push("/Imports/Components/Pages/Settings");
                  }}
                >
                  <Icon name="cog" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 100,
                borderBottomRightRadius: 65, // sağ alt köşe için ortalama bir değer
                borderBottomLeftRadius: 65,
                backgroundColor: colors.primary,
                paddingHorizontal: 15,
                paddingTop: 15,
                marginBottom: 165,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 16,
                  fontWeight: style.fontWeight,
                  marginBottom: 15,
                }}
              >
                Muster GmbH
              </Text>

              {/* <MapView
                
                customMapStyle={mapStyle}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 15,
                  position: "relative",
                }}
                provider={PROVIDER_GOOGLE}
                region={{
                  latitude: 38.42090290578521,
                  longitude: 27.1319021103306,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                pointerEvents="true"
              >
                <Marker
                  coordinate={{
                    latitude: 38.42090290578521,
                    longitude: 27.1319021103306,
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      padding: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.primary,
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      Ford Focus
                    </Text>
                    <Text style={{ color: colors.primary, fontSize: 12 }}>
                      GPS Online
                    </Text>
                  </View>

                  <Icon name="car" size={30} color={colors.primary} />
                </Marker>
              </MapView> */}

              <MapView
                customMapStyle={mapStyle}
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 15,
                  position: "relative",
                }}
                provider={PROVIDER_GOOGLE}
                region={{
                  latitude: 38.42090290578521,
                  longitude: 27.1319021103306,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                pointerEvents="true"
              >
                <View
                  style={{ position: "absolute", left: 0, top: 0, padding: 10 }}
                >
                  <Text
                    style={{
                      color: colors.primary,
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    Ford Focus
                  </Text>
                  <Text style={{ color: colors.primary, fontSize: 12 }}>
                    GPS Online
                  </Text>
                </View>
                <Marker
                  coordinate={{
                    latitude: 38.42090290578521,
                    longitude: 27.1319021103306,
                  }}
                >
                  <Icon name="car" size={30} color={colors.primary} />
                </Marker>
              </MapView>
            </View>

            <View
              style={{
                padding: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: colors.red,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: 15,
                  borderRadius: 5,
                }}
                onPress={() => {
                  router.push("/Imports/Components/Pages/Drivesheet");
                }}
              >
                <View>
                  <Svg
                    height="30"
                    width="30"
                    fill={"white"}
                    viewBox="0 0 20 20"
                  >
                    <Path d="m5 8.165v-2.165c0-2.209 1.791-4 4-4-.178 0 0 0 0 0 2.209 0 4 1.791 4 4 0 .552-.448 1-1 1s-1-.448-1-1c0-1.105-.895-2-2-2s-2 .895-2 2v2h5.018c1.647 0 2.982 1.335 2.982 2.982v4.036c0 .791-.314 1.55-.873 2.109s-1.318.873-2.109.873h-5.018c-.552 0-1-.448-1-1 0-1.104-.896-2-2-2-.552 0-1-.448-1-1v-3.018c0-1.303.835-2.411 2-2.817zm0 8.835c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm3-5v2c0 .552.448 1 1 1s1-.448 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1zm7-4h1c.552 0 1-.448 1-1s-.448-1-1-1h-1c-.552 0-1 .448-1 1s.448 1 1 1zm.707-3.293 1-1c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0l-1 1c-.39.39-.39 1.024 0 1.414s1.024.39 1.414 0z" />
                  </Svg>
                </View>
                <Text
                  style={{
                    color: colors.white,
                    fontWeight: style.fontWeight,
                    width: "80%",
                    textAlign: "center",
                  }}
                >
                  Offene Fahrten bearbeiten
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <PieChart
                data={chartData}
                width={screenWidth}
                height={120}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                absolute
              />
            </View>

            <Cizgi />
            <View
              style={{
                padding: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: style.fontWeight,
                  color: "#505050",
                }}
              >
                Letzte Fahrten
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/Imports/Components/Pages/Fahrtenbuch");
                }}
              >
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  Alle anzeigen
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Privathart data={data} />
            </View>
          </View>
        </View>
      </FadeInView>
    </>
  );
}
