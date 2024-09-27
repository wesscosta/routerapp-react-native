import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";


export default CategoryScreen = () => {
  const destinations = ['Teresina', 'Timon', 'Parnaiba', 'CampoMaior', 'SeteCidade', 'Oeiras', 'Floriano', 'Picos'];
  return (
    <LinearGradient colors={["#0A0C14", "#17243E", "#17243E"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cidades</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>Escolha seu Destino!! </Text>
          <View style={styles.nav}>
            {destinations.map(places => (
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => { router.push({ pathname: "/detailsScreen", params: { destination: places } }) }}>
                <Text style={styles.buttonText}>{places}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: '100%',
    height: '75%',
  },
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#2C3E50",
    alignItems: "center",
    marginBottom: 20,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
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
  nav: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: 'space-around'
  },

  touchableOpacity: {
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    width: "45%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight:'bold'
  },
});
