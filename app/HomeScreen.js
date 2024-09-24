import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles";

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      <View style={styles.main}> 
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
    </View>
  );
};
