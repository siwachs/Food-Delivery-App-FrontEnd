import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

//Currency Formatter npm package
import Currency from "react-currency-formatter";

//Icons
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

//Redux
import { useDispatch } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../../Redux/Features/basketSlice";
import { useSelector } from "react-redux";

const DishRow = ({ id, name, price, short_desc, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  //Redux State Managment
  const dispatch = useDispatch();

  //Fetch Value from Redux
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, price, short_desc, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed((prevValue) => !prevValue)}
        className={`p-4 bg-white border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row items-center">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_desc}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="INR"></Currency>
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-20 w-20 bg-gray-300 p-4"
              source={{
                uri: image,
              }}
            ></Image>
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4 flex-row items-center space-x-3 pb-3">
          <TouchableOpacity
            disabled={!items.length}
            onPress={removeItemFromBasket}
          >
            <MinusCircleIcon
              color={items.length == 0 ? "gray" : "#00BBCC"}
              size={40}
            ></MinusCircleIcon>
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon color="#00BBCC" size={40}></PlusCircleIcon>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
