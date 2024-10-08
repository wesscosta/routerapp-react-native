import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";

export default Weather = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const city = 'Teresina';
    const apiKey = "0f260882de7f1984410f186f4f6ccdb8";
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=${apiKey}&lang=pt_br&units=metric`;


    useEffect(() => {
        fetch(endpoint)  // URL da API
            .then((response) => response.json())
            .then((json) => {
                const clima = {
                    name: json.name,
                    description:json.weather[0].main,
                    icon: `https://openweathermap.org/img/wn/${encodeURI(json.weather[0].icon)}@2x.png`,
                    temp: json.main.temp,
                    temp_max:json.main.temp_max,
                    temp_min:json.main.temp_min,
                    vento: json.wind.speed,
                }

                setData(clima);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <View style={styles.contentBox}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <Image style={styles.image} source={{uri:data.icon}} />
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.textClima}>{data.temp.toFixed()}ºC</Text>
                    <Text style={styles.text}>{data.description} {data.temp_min.toFixed()}ºC / {data.temp_max.toFixed()}ºC</Text>
                </>
            )}
        </View>
    );

};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: "5%",
        textAlign:'center',
        color: "#fff",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    contentBox: {
        marginHorizontal: "auto",
        marginBottom: 20,

    },
    image: {
        height: 200,
        borderRadius: 10,
    },
    textClima:{
        fontSize: 85,
        fontWeight: 'light',
        color:'#fff',
        textAlign: 'center',
    },

    text: {
        textAlign:'center',
        // fontStyle:"italic",
        fontSize: 16,
        color: '#fff'
    },
})