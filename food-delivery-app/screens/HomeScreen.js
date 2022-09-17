import { SafeAreaView, StyleSheet, Platform } from "react-native";
import React, { useLayoutEffect } from "react";

import { useNavigation } from "@react-navigation/native";

//Components
import Header from "../components/Header/Header";
import SearchBar from "../components/Header/SearchBar";
import Body from "../components/HomeScreenBody/Body";

const HomeScreen = () => {
  const navigationConfig = useNavigation();

  useLayoutEffect(() => {
    navigationConfig.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={styles.container} className="bg-white">
      <Header></Header>
      <SearchBar></SearchBar>
      <Body></Body>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default HomeScreen;
