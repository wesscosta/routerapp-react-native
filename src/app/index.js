import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Weather from "../components/weather";
import WeatherCardDays from "../components/weather";

export default function Home() {
  return (

    <LinearGradient colors={["#0A0C14", "#17243E", "#17243E"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
        </View>
        <View style={styles.main}>
          <Weather/>
          <WeatherCardDays/>
        </View>
        <View style={styles.footer}>
          
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              router.push("./categoryScreen");
            }}
          >
            <Text style={styles.buttonText}>Veja as Opções</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    marginBottom: 20,
  },
  main: {
    flex:4,
    // height: '100%',
    // width: '100%',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
    color: "#fff",
  },

  touchableOpacity: {
    backgroundColor: "#7F8C8D",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    paddingHorizontal:30,
  },
  footer: {
    flex:1,
    bottom:10,
    color: 'red',
  }
});