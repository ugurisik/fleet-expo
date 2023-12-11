import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import style from "../../../Config/Style/style";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome5";
import Cizgi from "./Cizgi";

function Privathart({ data }) {
  const router = useRouter();

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 15,
        paddingHorizontal: 15,
      }}
    >
      {data &&
        data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              router.push("/Imports/Components/Pages/Tod", {
                params: {
                  title: item.title, // todo arac bilgisi
                },
              });
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: 15,
                alignItems: "center",
              }}
            >
              <View style={[style.IconKutu, { backgroundColor: "#d0d0d0" }]}>
                <Icon name={item.icon} size={20} color="white" />
              </View>
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: style.fontWeight,
                    marginBottom: 5,
                    color: "#616161",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={[style.SubTitle, { color: "#505050" }]}>
                  {item.subtitle}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: style.fontWeight,
                    color: "#929292",
                  }}
                >
                  {item.km} KM
                </Text>
              </View>
            </View>
            <Cizgi margintop={15} />
          </TouchableOpacity>
        ))}
    </View>
  );
}

export default Privathart;
