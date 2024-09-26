import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useParams } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";

// Simulated data for destinations
const destinationDetails = {
  Teresina: {
    description: "Known as the City of Love, Paris is home to the Eiffel Tower, Louvre Museum, and many other iconic attractions.",
    image: require('../assets//teresina.jpg'),
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"],
  },
  Timon: {
    description: "A bustling metropolis blending the ultra-modern with traditional temples, Tokyo offers an unforgettable experience.",
    image: require("../assets//timon.jpeg"),
    attractions: ["Shinjuku Gyoen National Garden", "Meiji Shrine", "Tokyo Tower"],
  },
  Parnaiba: {
    description: "Known as the Big Apple, New York City is famous for its iconic skyline, Broadway shows, and diverse culture.",
    image: require('../assets//parnaiba.jpeg'),
    attractions: ["Statue of Liberty", "Central Park", "Empire State Building"],
  },
  CampoMaior: {
    description: "Known as the Big Apple, New York City is famous for its iconic skyline, Broadway shows, and diverse culture.",
    image: require('../assets//campo_maior.webp'),
    attractions: ["Statue of Liberty", "Central Park", "Empire State Building"],
  },
  SeteCidade: {
    description: "Known as the City of Love, Paris is home to the Eiffel Tower, Louvre Museum, and many other iconic attractions.",
    image: require('../assets//teresina.jpg'),
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"],
  },
  Oeiras: {
    description: "A bustling metropolis blending the ultra-modern with traditional temples, Tokyo offers an unforgettable experience.",
    image: require("../assets//timon.jpeg"),
    attractions: ["Shinjuku Gyoen National Garden", "Meiji Shrine", "Tokyo Tower"],
  },
  Floriano: {
    description: "Known as the Big Apple, New York City is famous for its iconic skyline, Broadway shows, and diverse culture.",
    image: require('../assets//parnaiba.jpeg'),
    attractions: ["Statue of Liberty", "Central Park", "Empire State Building"],
  },
  Picos: {
    description: "Known as the Big Apple, New York City is famous for its iconic skyline, Broadway shows, and diverse culture.",
    image: require('../assets//campo_maior.webp'),
    attractions: ["Statue of Liberty", "Central Park", "Empire State Building"],
  },

};

export default function DetailsScreen() {
  const params = useLocalSearchParams()
  const destination = params.destination
  const details = destinationDetails[destination];

  if (!details) {
    return (
      <LinearGradient colors={["#0A0C14", "#17243E", "#17243E"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Destination not found.</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={["#0A0C14", "#17243E", "#17243E"]} style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{destination}</Text>
        </View>
        {/* Wrap the content below the header in a new View with a green background */}
        <View style={styles.contentBox}>
          <Image source={details.image} style={styles.image} />
          <Text style={styles.description}>{details.description}</Text>
          <Text style={styles.subtitle}>Top Attractions:</Text>
          {details.attractions.map((attraction, index) => (
            <Text key={index} style={styles.attraction}>{attraction}</Text>
          ))}

        </View>
      </ScrollView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    marginBottom: 20,
  },
  main: {
    height: '75%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  contentBox: {
    padding: 20,
    backgroundColor: "#ECF0F1",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20, // Adjust as needed
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'black'
  },
  attraction: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black'
  },
});