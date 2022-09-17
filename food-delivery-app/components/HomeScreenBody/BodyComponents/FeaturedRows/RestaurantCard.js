import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// Icons
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

//Navigation between Screens
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_desc,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow rounded-lg"
    >
      <Image
        className="h-36 w-64 rounded-lg"
        source={{
          uri: imgUrl,
        }}
      ></Image>

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>

        <View className="flex-row items-center">
          <MapPinIcon color="gray" opacity={0.4} size={22}></MapPinIcon>
          <Text className="text-xs text-gray-500">NearBy • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
