import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, } from "react-native";


export default Weather = () => {
    const city = 'Teresina';
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const apiKey = "0f260882de7f1984410f186f4f6ccdb8";
    
    const FetchWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${apiKey}&lang=pt_br&units=metric`
        ;
        try {
            const results = await fetch(url);
            const data = await results.json();
            setInfo(data)
            setLoading(false);
            // <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    };


    useEffect(() => {
        FetchWeather();
    }, []);


    return (
        <View style={styles.contentBox}>
            <Text style={styles.title}>Lista de Usuarios</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // Indicador de carregamento
            ) : (
                <View style={styles.contentBox}>
                    {/* <Text style={styles.text}>Cidade:{data.name}</Text>; */}
                    <Text style={styles.text}>Informação do Tempo: {data.main.temp}</Text>
                    <Text style={styles.text}>Informação do Vento: {data.wind.speed}</Text>
                </View>
            )}
        </View>
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        color: 'black'
    },
})