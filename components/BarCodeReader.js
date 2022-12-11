import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const BarCodeReader = (props) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const config = {
      method: "GET",
      url: `https://go-upc.com/api/v1/code/${props.barcode}`,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 5872b095d1a833d0b74340b6e6354384f2883c7d3847c9bb6fa9070a6cdfbc0e",
      },
    };
    axios(config)
      .then(function (res) {
        setResponse(res.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.barcode]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name:</Text>
      <Text style={styles.text}>{response.name}</Text>
      {response.description === "No description found" ? (
        <Text></Text>
      ) : (
        <>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.text}>{response.description}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: 350,
    padding: 50,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default BarCodeReader;
