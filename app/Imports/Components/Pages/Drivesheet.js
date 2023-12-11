import React, { useState, useEffect, useCallback, Suspense, lazy } from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Text,
  Alert,
} from "react-native";
import Config from "../../../Config/Config";
import Header from "../Inc/Header";
import style from "../../../Config/Style/style";
import Cizgi from "../Inc/Cizgi";
import Icon from "react-native-vector-icons/FontAwesome5";
import Svg, { Path, parse } from "react-native-svg";
import colors from "../../../Config/Colors/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { router } from "expo-router";
import SlideInView from "../../../Config/Style/SlideInView";
import FadeInView from "../../../Config/Style/FadeInView";
import axios from "axios";

export default function Drivesheet() {
  const [loading, setIsLoading] = useState(true);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [clickedItems, setClickedItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [firstSelectedId, setFirstSelectedId] = useState(null);

  const subicons = [
    { icon: "link", isClickable: true },
    { icon: "car", isClickable: false },
  ];

  const today = new Date().toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  function formatTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const [data, setData] = useState([]);

  const showAlert = () => {
    Alert.alert(
      "Wichtig",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
    );
  };

  const fetchData = async () => {
    const response = await axios({
      method: "GET",
      url: "https://safari-gps.live/func/fn_fleet.php?api=true&cmd=load_last_trips&token=38a896383738465ab4c03c4f96c49d38",
    });

    const groupedData = response.data.trips.reduce((acc, trip) => {
      const date = trip.Date_Category; // Extract the date from the Date_Category field
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(trip);
      return acc;
    }, {});

    setData(groupedData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (isButtonClicked) {
      // showAlert();
      return;
    }
  }, [isButtonClicked]);

  return (
    <>
      <FadeInView>
        <View
          style={{
            backgroundColor: colors.primary,
            padding: 20,
            paddingTop: 50,
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                isButtonClicked
                  ? setIsButtonClicked(!isButtonClicked)
                  : router.back();
              }}
            >
              <SlideInView trigger={isButtonClicked}>
                {isButtonClicked ? (
                  <Svg
                    fill="#ffffff"
                    height={30}
                    width="30"
                    viewBox="0 0 460.775 460.775"
                  >
                    <Path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                  </Svg>
                ) : (
                  <Icon name="arrow-left" size={30} color="#fff" />
                )}
              </SlideInView>
            </TouchableOpacity>

            <View
              style={{
                marginLeft: 30,
                width: "65%",
              }}
            >
              <Text style={[style.Title]}>Fahrten verbinden</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            >
              {subicons &&
                subicons.length > 0 &&
                subicons.map((item, index) => {
                  if (!item.icon) {
                    console.warn(
                      `Item at index ${index} does not have an icon.`
                    );
                    return null;
                  }
                  return item.isClickable ? (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setIsButtonClicked(!isButtonClicked);
                      }}
                    >
                      <Icon size={30} name={item.icon} color="#fff" />
                    </TouchableOpacity>
                  ) : (
                    <View key={index}>
                      <Icon size={30} name={item.icon} color="#fff" />
                    </View>
                  );
                })}
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={{ marginLeft: 15, marginRight: 15 }}>
            {Object.entries(data).map(([date, items], index) => (
              <View key={index}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "start",
                    marginTop: 15,
                  }}
                >
                  {date === today ? "Today" : date}
                </Text>

                <Cizgi margintop={15} />

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginTop: 10,
                  }}
                >
                  {items.map((item, index) => {
                    return (
                      <Suspense key={index}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#e8e8e8",
                            borderRadius: 5,
                            padding: 15,
                            flexDirection: "row",
                            display: "flex",
                            gap: 15,
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                          onPress={() => {
                            router.push({
                              pathname: "/Imports/Components/Pages/Tod",
                              params: item,
                            });
                          }}
                        >
                          {isButtonClicked && (
                            <BouncyCheckbox
                              size={25}
                              fillColor={colors.primary}
                              unfillColor="#FFFFFF"
                              text=""
                              iconStyle={{ borderColor: colors.primary }}
                              innerIconStyle={{ borderWidth: 2 }}
                              disabled={
                                selectedId !== null &&
                                Math.abs(selectedId - index) > 1 &&
                                Math.abs(firstSelectedId - index) > 1
                              }
                              onPress={() => {
                                if (clickedItems.includes(item)) {
                                  setClickedItems(
                                    clickedItems.filter((i) => i !== item)
                                  );
                                  setSelectedId(null);
                                } else {
                                  setClickedItems([...clickedItems, item]);
                                  setSelectedId(index);
                                  if (firstSelectedId === null) {
                                    setFirstSelectedId(index);
                                  }
                                }
                              }}
                            />
                          )}
                          <View>
                            <Text style={style.ItemDate}>
                              {formatTime(item.Date)}
                            </Text>
                            <Text style={style.ItemDate}>
                              {formatTime(item.Date2)}
                            </Text>
                          </View>

                          <View style={{ width: "50%" }}>
                            <Text>
                              {parseFloat(item.Lat).toFixed(5) +
                                " " +
                                parseFloat(item.Long).toFixed(5)}
                            </Text>
                            <Text>
                              {parseFloat(item.Lat2).toFixed(5) +
                                " " +
                                parseFloat(item.Long2).toFixed(5)}
                            </Text>
                          </View>

                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 15,
                            }}
                          >
                            <Text>{parseFloat(item.Km).toFixed(2)} KM </Text>
                            <Icon name="angle-right" size={30} />
                          </View>
                        </TouchableOpacity>
                      </Suspense>
                    );
                  })}
                </View>
              </View>
            ))}
          </View>
        <View style = {{ marginBottom: 150}}></View>

        </ScrollView>


      </FadeInView>

      {isButtonClicked && (
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            backgroundColor: "#fff",
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: clickedItems.length > 1 ? colors.primary : "red",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {clickedItems.length > 1
                ? "Ausgewahlte (" + clickedItems.length + ") Fahrten verbinden"
                : "Wahlen sie mindestens zwe ! Fahrten aus "}{" "}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 15,
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  padding: 10,
                  backgroundColor: "red",
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
              </View>
              <Text style={{ color: "red", marginTop: 10 }}>Privatfahrt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  padding: 10,
                  backgroundColor: "green",
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
              </View>
              <Text style={{ color: "green", marginTop: 10 }}>bu cok uzun</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  padding: 10,
                  backgroundColor: "orange",
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
              </View>
              <Text style={{ color: "orange", marginTop: 10 }}>Arbeistweg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 100,
                  padding: 10,
                  backgroundColor: colors.primary,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon style={{}} name="shopping-bag" size={30} color="#fff" />
              </View>
              <Text style={{ color: colors.primary, marginTop: 10 }}>
                Mischfahrt
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
