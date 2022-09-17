import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

//Icons
import { AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const SearchBar = () => {
  return (
    <View className="flex-row items-center mx-3 space-x-1 mb-2">
      <View className="flex-row items-center flex-1 bg-gray-300 rounded-md p-2">
        <TextInput
          className="flex-1"
          style={{ outline: "none" }}
          placeholder="Restaurants and Cuisine"
          keyboardType="default"
        ></TextInput>
        <TouchableOpacity>
          <MagnifyingGlassIcon color="gray"></MagnifyingGlassIcon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
