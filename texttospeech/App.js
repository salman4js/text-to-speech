import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { AntDesign } from "@expo/vector-icons"

export default function App() {
  const [text, setText] = useState();

  const speak = () => {
    
    const speech = `${text}`;
    console.log(speech);
    Speech.speak(speech)
  }

  const clearField = () => {
    setText("")
  }

  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Text style={styles.header}>
          Text to Speech Convertor MAD
        </Text>
      </View>

      <View style = {styles.wrapper}>
        <TextInput style = {styles.input} placeholder = "Enter Your Text Here!" placeholderTextColor = "#009688" onChangeText = {setText} value = {text}/>
        <TouchableOpacity style = {styles.test1} onPress = {clearField}>
          <View style = {styles.test}>
            <AntDesign name = "retweet" color  = "white" size = {24} />
          </View>
        </TouchableOpacity>
      </View>

      <View style = {styles.speak1}>
        <TouchableOpacity onPress = {() => speak()}>
          <View style = {styles.speak}>
            <Text>
              Speak Now!
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  navbar: {
    backgroundColor: "#009688",
    marginBottom: 40
  },
  header: {
    fontSize: 18,
    color: 'white',
    paddingTop: 70,
    paddingHorizontal: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  wrapper : {
    justifyContent : 'space-around',
  },
  speak : {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical : 10,
    alignItems : "center",
    width : Dimensions.get("window").width / 4,
  },
  speak1 : {
    position : 'absolute',
    bottom : 60,
    paddingHorizontal : Dimensions.get("window").width / 2.6
  },
  test : {
    width: 50,
    height: 50,
    backgroundColor: '#009688',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#009688',
    borderWidth: 1,
  },
  test1 : {
    flexDirection : 'row',
    paddingHorizontal : Dimensions.get("window").width / 1.8 + 90
  }
});
