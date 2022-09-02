import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import Button from './src/components/button';
import Keyboard from './src/components/keyboard';
import { color } from './src/constant/color';
import { ThemeContext } from './src/context/themeContext';

export default function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === "light" ? styles.container : [styles.container , { backgroundColor: "black"}]}>
        {/* <Text style={{color: theme === "light" ? "black":"white" }}>Open up App.tsx to start working on your app!</Text> */}
        <StatusBar style="auto" />
        <Switch 
          value={theme === "light"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}  
        />
        <Keyboard></Keyboard>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
