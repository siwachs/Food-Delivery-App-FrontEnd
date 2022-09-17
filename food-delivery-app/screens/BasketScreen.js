import {
  View,
  Text,
  Platform,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";

//Navigation V6
import { useNavigation } from "@react-navigation/native";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../Redux/Features/restaurantSlice";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../Redux/Features/basketSlice";

//Icons
import { XCircleIcon } from "react-native-heroicons/solid";

//Currency Formatter
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const subtotal = useSelector(selectBasketTotal);

  //Grop Items
  const [groupedItems, setGroupedItems] = useState([]);

  //Optimization
  useMemo(() => {
    //If value of Items does not change then it not recompute the value.

    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);

      return results;
    }, {});

    setGroupedItems(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="bg-white" style={styles.container}>
      <View className="flex-1 bg-gray-100">
        <View className="relative p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View className="flex-1">
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>

          <View className="absolute top-5 right-3">
            <TouchableOpacity
              onPress={navigation.goBack}
              className="rounded-full bg-gray-100"
            >
              <XCircleIcon color="#00CCBB" size={50}></XCircleIcon>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center space-x-4 px-4 bg-white py-3 my-5">
          <Image
            source={{
              uri: "http://links.papareact.com/wru",
            }}
            className="h-12 w-12 bg-gray-300 p-4 rounded-full"
          ></Image>
          <Text className="flex-1">Deliver in 50-75 minutes!</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200 flex-1">
          {Object.entries(groupedItems).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-1 bg-white py-2 px-2"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                className="h-12 w-12 rounded-full"
                source={{
                  uri: items[0].image,
                }}
              ></Image>
              <Text className="flex-1">{items[0].name}</Text>
              <Text className="text-gray-600">
                {<Currency quantity={items[0].price} currency="INR"></Currency>}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-xs md:text-lg text-[#00CCBB]">
                  Remove
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(addToBasket({ id: key }))}
              >
                <Text className="text-xs md:text-lg text-[#00CCBB]">
                  Add More
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={subtotal} currency="INR"></Currency>
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency
                quantity={subtotal > 300 ? 0 : 80}
                currency="INR"
              ></Currency>
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Total</Text>
            <Text className="text-gray-400">
              <Currency
                quantity={subtotal + (subtotal > 300 ? 0 : 80)}
                currency="INR"
              ></Currency>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("PreparingOrder")}
          className="rounded-lg bg-[#00CCBB] p-4 mx-2"
        >
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default BasketScreen;
