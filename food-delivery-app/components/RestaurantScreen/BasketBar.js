import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

//Navigation
import { useNavigation } from "@react-navigation/native";

//State Managment
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../Redux/Features/basketSlice";

//Format
import Currency from "react-currency-formatter";

const BasketBar = () => {
  //Get Basket
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);

  const navigation = useNavigation();

  if (items.length <= 0) return;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] mx-5 p-4 rounded-xl flex-row items-center space-x-2"
      >
        <Text className="text-white font-extrabold text-md md:text-lg bg-[#01A296] py-1 px-2 rounded-lg">
          {items.length} Items
        </Text>
        <Text className="text-white font-extrabold text-md md:text-lg flex-1 text-center">
          View Basket
        </Text>
        <Text className="font-extrabold text-white text-md md:text-lg">
          <Currency quantity={total} currency="INR"></Currency>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketBar;
