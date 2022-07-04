import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
// import AppBar from "./AppBar";
import LogInt from "../pages/LogIn";
import { Route, Routes } from "react-router-native";
import { Platform } from "react-native";

function Main() {
  const AppBar = Platform.select({
    android: () => require("./AppBar").default,
    ios: () => require("./AppBar.web").default,
    web: () => require("./AppBar.web").default
  })();

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route caseSensitive path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LogInt />} />
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%"
  }
});

export default Main;
