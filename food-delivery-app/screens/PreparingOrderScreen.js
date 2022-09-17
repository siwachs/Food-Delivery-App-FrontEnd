import { SafeAreaView, Platform } from "react-native";
import React, { useEffect } from "react";

//Navigation
import { useNavigation } from "@react-navigation/native";

//StatusBar
import { StatusBar } from "expo-status-bar";

//Hide Nav Buttons on Android

//Animation
import * as Animatable from "react-native-animatable";

//ProgressBar
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    //Simulate accept order.
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className={`bg-[#00CCBB] flex-1 justify-center items-center`}>
      {Platform.OS === "android" && (
        <StatusBar style="auto" hidden={true}></StatusBar>
      )}
      <Animatable.Image
        source={require("../assets/img/preparingOrder.webp")}
        animation="slideInUp"
        iterationCount={1}
        className="h-72 w-80"
      ></Animatable.Image>

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
