// Importing modules
import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
const { manifest } = Constants;

const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:5000`)
  : `api.example.com`

  // const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`;

function getDay(num) {
  if (num === 0) {
    return "Monday"
  } else if (num === 1) {
    return "Tuesday"
  } else if (num === 2) {
    return "Wednesday"
  } else if (num === 3) {
    return "Thursday"
  } else if (num === 4) {
    return "Friday"
  } else if (num === 5) {
    return "Saturday"
  } else if (num === 6) {
    return "Sunday"
  } else {
    return ""
  }
}

export default function App() {
  // object for storing and using data
  const [data, setData] = useState({
    day: "",
    month: "",
    date: "",
    year: "",
  });

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("http://"+api+"/date").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setData({
          day: data.Day,
          month: data.Month,
          date: data.Date,
          year: data.Year,
        });
      })
    ).catch((error) => console.log('fetchToken error: ', error));
  }, []);
  return (
    <View style={styles.container}>
      <Text>React and Flask</Text>
      {/* Calling a data from setdata for showing */}
      <Text>Day: {getDay(data.day)}</Text>
      <Text>Date: {data.date}/{data.month}/{data.year}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
