//Screens
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";

//Tailwind CSS
import { TailwindProvider } from "tailwindcss-react-native";

//React Native Navigations
import { NavigationContainer } from "@react-navigation/native";

//To Modify StatusBar
import { StatusBar } from "expo-status-bar";

//To Connect Sanity CMS to Front-end use @sanity/client and @sanity/image-url package

//React Redux
import { Provider } from "react-redux";
import { store } from "./Redux/store";

//React Native navigation Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeliveryScreen from "./screens/DeliveryScreen";

//Stack Instance
const Stack = createNativeStackNavigator();

//NOTE: react-currency-formatter make conflict in dependency tree so use npm i --force

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen
              name="Restaurant"
              component={RestaurantScreen}
            ></Stack.Screen>
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              options={{
                headerShown: false,
                presentation: "fullScreenModal",
              }}
              name="Delivery"
              component={DeliveryScreen}
            ></Stack.Screen>
          </Stack.Navigator>
          <StatusBar hidden={false} style="auto"></StatusBar>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
