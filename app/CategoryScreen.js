import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { styles } from "./styles";

export default CategoryScreen = () => {
  const destinations = ['Teresina', 'Timon', 'Parnaiba', 'CampoMaior'];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cidades</Text>
      </View>
      <View style={styles.main}> 
      <Text style={styles.title}>Escolha seu Destino!! </Text>

      {/* { destinations.map(destinations =>(
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {router.push("/HomeScreen")}}>
        <Text style={styles.buttonText}>{destinations}</Text>
      </TouchableOpacity>
      )) } */}
            {destinations.map(places => (
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => {router.push({pathname : "/DetailsScreen" , params : {destination : places}})}}>
            <Text style={styles.buttonText}>{places}</Text>
        </TouchableOpacity>
      ))}
    </View>      
    </View>
  );
};