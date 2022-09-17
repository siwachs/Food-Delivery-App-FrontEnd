import {
  View,
  Text,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";

// Icons
import { ArrowRightIcon } from "react-native-heroicons/outline";

//Components
import RestaurantCard from "./RestaurantCard";

//Resolve Image
import { urlFor } from "../../../../sanity";

const FeaturedRows = ({ title, description, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-xl">{title}</Text>
        <TouchableOpacity>
          <ArrowRightIcon color={"#00CCBB"}></ArrowRightIcon>
        </TouchableOpacity>
      </View>

      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 10,
        }}
        className="pt-4"
      >
        {/* Restaurant Cards... */}
        {restaurants.length !== 0 &&
          restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={urlFor(restaurant.image).url()}
              rating={restaurant.rating}
              title={restaurant.name}
              genre={restaurant.type.name}
              address={restaurant.address}
              short_desc={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant?.long || 69.45}
              lat={restaurant?.lat || -120.32}
            ></RestaurantCard>
          ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
