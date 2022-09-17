import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React from "react";

//Navigation
import { useNavigation } from "@react-navigation/native";

//Redux
import { useSelector } from "react-redux";
import { selectRestaurant } from "../Redux/Features/restaurantSlice";

//Icons
import { XMarkIcon } from "react-native-heroicons/solid";

//ProgressBar
import * as Progress from "react-native-progress";

//npm i react-native-maps
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);

  const navigation = useNavigation();

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30}></XMarkIcon>
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 shadow-md z-50">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-75 minutes</Text>
            </View>

            <Image
              source={require("../assets/img/deliveryMan.webp")}
              className="h-20 w-20"
            ></Image>
          </View>

          <Progress.Bar
            size={30}
            indeterminate={true}
            color="#00CCBB"
          ></Progress.Bar>

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>

      {/* Map -->Delta here is Zoom Scale and Only Work on Android or IOS not on Web.*/}
      {Platform.OS !== "web" ? (
        <MapView
          initialRegion={{
            latitude: restaurant.lat || -1,
            longitude: restaurant.long || -1,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="flex-1 z-0 -mt-10"
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat || -1,
              longitude: restaurant.long || -1,
            }}
            title={restaurant.title}
            description={restaurant.short_desc}
            pinColor="#00CCBB"
            identifier="origin"
          ></Marker>
        </MapView>
      ) : (
        <Text className="text-2xl text-white flex-1 p-5">
          Currently maps are not available for web kindly use our app.
        </Text>
      )}

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 rounded-full bg-gray-300 ml-4 p-4"
        ></Image>
        <View className="flex-1">
          <Text className="text-lg">DELIVERER Name</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <TouchableOpacity>
          <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
