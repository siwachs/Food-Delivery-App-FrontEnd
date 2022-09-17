import {
  View,
  Text,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";

//Fetch Passed Args
import { useRoute, useNavigation } from "@react-navigation/native";

//Icons
import {
  ArrowLeftIcon,
  StarIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/RestaurantScreen/DishRow";

//Resolve Images
import { urlFor } from "../sanity";
import BasketBar from "../components/RestaurantScreen/BasketBar";

//Get Basket Length
import { useSelector, useDispatch } from "react-redux";
import { selectBasketItems } from "../Redux/Features/basketSlice";
import { setRestaurant } from "../Redux/Features/restaurantSlice";

const RestaurantScreen = () => {
  //Hide Header (default)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: {
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
    },
  } = useRoute();

  const items = useSelector(selectBasketItems);

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketBar></BasketBar>
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-56 bg-gray p-4"
            source={{
              uri: imgUrl,
            }}
          ></Image>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.container}
            className={`absolute rounded-full bg-gray-100 p-2 ${
              Platform.OS == "ios" ? "top-14 left-5" : "top-1 left-2"
            }`}
          >
            <ArrowLeftIcon size={20} color="#00CCBB"></ArrowLeftIcon>
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-3 my-1 items-center">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
                <Text className="text-xs text-gray-500 md:text-md">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" size={22} opacity={0.4}></MapPinIcon>
                <Text className="text-xs text-gray-500 md:text-md">
                  NearBy • {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_desc}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon
              size={22}
              opacity={0.4}
              color="gray"
            ></QuestionMarkCircleIcon>
            <Text className="pl-2 text-md flex-1 font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB"></ChevronRightIcon>
          </TouchableOpacity>
        </View>

        <View className={!items.length == 0 && "pb-24"}>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dishes Row */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              price={dish.price}
              short_desc={dish.short_description}
              image={urlFor(dish.image).width(600).url()}
            ></DishRow>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default RestaurantScreen;
