import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";
import TranslateResponse from "./TranslateResponse";

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
    <View>
        <TranslateResponse input={response.name}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});

export default BarCodeReader;
