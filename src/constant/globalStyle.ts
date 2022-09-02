import { StyleSheet } from "react-native"
import { color } from "./color"
export const styles = StyleSheet.create({
    btn: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: "center",
        alignItems:"center",
        margin:8,
        shadowColor: "gray",
        color: "white",
    },
    screenFirst: {
        fontSize: 96,
        color: color.gray,
        fontWeight: "200",
        alignSelf: "flex-end"
    },  
    screenSecond: {
        fontSize: 40,
        color: color.gray,
        fontWeight: "200",
        alignSelf: "flex-end"
    }
})
