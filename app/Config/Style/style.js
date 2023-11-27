import { StyleSheet } from "react-native";
import colors from "../Colors/colors";

let style = new StyleSheet.create({
    Title : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    }, SubTitle: {
        color: colors.muted,
        fontSize: 14,
        textAlign: 'left',
    },
    RootMarginLeft : 40,
    RootMarginRight: 40,
    fontWeight : 'bold',
    fontSize : 20,
    ItemDate : {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'start',
    },
    IconKutu: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.muted,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ItemsGap10AndFlex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "start",
        gap:15,
        paddingHorizontal: 15,
    },
});

export default style;