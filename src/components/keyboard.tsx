import * as React from 'react'
import Button from './button'
import {View, Text} from 'react-native'
import { styles } from '../constant/globalStyle'
import { color } from '../constant/color'

const Keyboard = () => {
    const [first, setFirst] = React.useState("")
    const [second, setSecond] = React.useState("")
    const [result, setResult ] = React.useState<Number | null>(null)
    const [operation, setOperation] = React.useState("")
    const handlePressNumber = (value: string) => {
        if(first.length < 10){
            setFirst(first + value)
        }
    }
    const handlePressOperation = (value:string) => {
        setOperation(value)
        setSecond(first)
        setFirst("")
    }
    const clear = () => {
        setFirst("")
        setSecond("")
        setOperation("")
        setResult(null)
    }
    const getResult = () => {
        switch(operation){
            case "+" : 
                clear()
                setResult(parseInt(second) + parseInt(first))
                break;
            
            case "-" : 
                clear()
                setResult(parseInt(second) - parseInt(first))
                break;
            
            case "*" : 
                clear()
                setResult(parseInt(second) * parseInt(first))
                break;
            
            case "/" : 
                clear()
                setResult(parseInt(second) / parseInt(first))
                break;
            default: 
                clear()
                setResult(0)
                break;
        }
    }
    const firstNumberDisplay = () => {
        if(result !== null) {
            return <Text style={result < 99999 ? [styles.screenFirst, {color: color.result}] : [styles.screenFirst, {color: color.result, fontSize: 50}]}>{result.toString()}</Text>
        }
        if(first && first.length < 6){
            return <Text style={styles.screenFirst}>{first}</Text>
        }
        if(first === ""){
            return <Text style={styles.screenFirst}>0</Text>
        }
        if(first.length > 5 && first.length < 8){
            return <Text style={[styles.screenFirst, { fontSize: 70}]}>{first}</Text>
        }
        if(first.length > 7) {
            return <Text style={[styles.screenFirst, { fontSize: 50}]}>{first}</Text>

        }
    }
    return (
        <View style={{ position: "absolute", bottom: 50}}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent:"flex-end",
                    alignSelf:"center"
                }}    
            >
                <Text style={styles.screenSecond}>{second}</Text>
                <Text style={{ color: "purple", fontSize: 50, fontWeight: "500"}}>{operation}</Text>
                {firstNumberDisplay()}
            </View>
            <View style={{flexDirection: "row", maxWidth: "100%"}}>
                <Button title="C" onPress={clear} isGray={true}></Button>
                <Button title="X" onPress={() => setFirst(first.slice(0,-1))} isGray={true}></Button>
                <Button title="%" onPress={() => handlePressOperation("%")} isGray={true}></Button>
                <Button title="/" onPress={() => handlePressOperation("/")} isBlue={true}></Button>
            </View>
            <View  style={{flexDirection: "row", maxWidth: "100%"}}> 
                <Button title="7" onPress={() => handlePressNumber("7")}></Button>
                <Button title="8" onPress={() =>handlePressNumber("8")}></Button>
                <Button title="9" onPress={() =>handlePressNumber("9")}></Button>
                <Button title="x" onPress={() =>handlePressOperation("*")} isBlue={true}></Button>
            </View>
            <View  style={{flexDirection: "row", maxWidth: "100%"}}> 
                <Button title="4" onPress={() =>handlePressNumber("4")}></Button>
                <Button title="5" onPress={() =>handlePressNumber("5")}></Button>
                <Button title="6" onPress={() =>handlePressNumber("6")}></Button>
                <Button title="-" onPress={() =>handlePressOperation("-")} isBlue={true}></Button>
            </View>
            <View  style={{flexDirection: "row", maxWidth: "100%"}}> 
                <Button title="1" onPress={() =>handlePressNumber("1")}></Button>
                <Button title="2" onPress={() =>handlePressNumber("2")}></Button>
                <Button title="3" onPress={() =>handlePressNumber("3")}></Button>
                <Button title="+" onPress={() =>handlePressOperation("+")} isBlue={true}></Button>
            </View>
            <View  style={{flexDirection: "row", maxWidth: "100%"}}> 
                <Button title="s" onPress={() => handlePressOperation("s")}></Button>
                <Button title="0" onPress={() => handlePressNumber("0")}></Button>
                <Button title="," onPress={() => handlePressNumber(".")}></Button>
                <Button title="=" onPress={() => getResult()} isBlue={true}></Button>
            </View>
        </View>
    )
}
export default Keyboard