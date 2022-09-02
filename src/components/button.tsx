import { useContext } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { ThemeContext } from "../context/themeContext";
import {styles} from '../constant/globalStyle'    
import { color } from "../constant/color";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

const Button: React.FC<ButtonProps> = ({onPress, title, isBlue, isGray }) => {
    const theme = useContext(ThemeContext)
    return (
        <TouchableOpacity 
            style={isBlue && isGray === undefined ? [styles.btn, { backgroundColor: color.blue}] : isGray && isBlue === undefined ? [styles.btn , {backgroundColor: color.btnGray}] : [styles.btn, { backgroundColor: color.light, borderWidth: 1}]}
            onPress={onPress}    
        >
            <Text style={{textTransform: "capitalize", fontSize: 25, color: isBlue || isGray  ? "white" : "black"}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button