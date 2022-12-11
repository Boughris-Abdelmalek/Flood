import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";

const TranslateResponse = (props) => {
  const [translatedResponse, setTranslatedResponse] = useState([]);

  if (props.input !== undefined) {
    const data = JSON.stringify({
      text: props.input.split(" "),
      target_lang: "EN",
    });

    const config = {
      method: "POST",
      url: "https://api-free.deepl.com/v2/translate",
      headers: {
        "Content-Type": "application/json",
        Authorization: "DeepL-Auth-Key 27dc057c-fd56-f403-4b4f-aa70b7042469:fx",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setTranslatedResponse(response.data.translations);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      {translatedResponse.map((e) => {
        return <Text>{e.text}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 100,
    },
  });

export default TranslateResponse;
