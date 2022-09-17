import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

//Icons
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View className="flex-row items-center space-x-2 mx-3 my-3">
      <TouchableOpacity>
        <Image
          source={require("../../assets/img/logo.avif")}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        ></Image>
      </TouchableOpacity>

      {/* Flex-1 take all The Avilable Space */}
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <View
          className="flex-row items-center"
          style={{
            cursor: "pointer",
          }}
        >
          <Text className="text-lg md:text-xl font-bold">Current Location</Text>
          <ChevronDownIcon size={20} color="#00CCBB" />
        </View>
      </View>

      {/* User Profile */}
      <TouchableOpacity className="rounded-full">
        <UserIcon size={35} color="#00CCBB"></UserIcon>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
