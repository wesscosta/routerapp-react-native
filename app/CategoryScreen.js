import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default CategoryScreen = () => {
  const destinations = ['Teresina', 'Timon', 'Parnaiba', 'Campo Maior'];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cidades</Text>
      </View>

      <Text style={styles.title}>Escolha seu Destino!! </Text>

      { destinations.map(destinations =>(
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {router.push("/HomeScreen")}}>
        <Text style={styles.buttonText}>{destinations}</Text>
      </TouchableOpacity>
      )) }
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
    marginTop: "15%",
    color: "#2C3E50",
  },
  touchableOpacity: {
    backgroundColor: "#7F8C8D",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 40,
    width: "50%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
