import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <Text style={styles.title}>Bem Vindo!! </Text>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          router.push("/CategoryScreen");
        }}
      >
        <Text style={styles.buttonText}>Veja as Opções</Text>
      </TouchableOpacity>
    </View>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
    marginTop: "50%",
    color: "#2C3E50",
  },
  touchableOpacity: {
    backgroundColor: "#7F8C8D",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
    width: "90%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
