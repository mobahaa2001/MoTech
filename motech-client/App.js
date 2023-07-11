import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigatino from "./navigation/BottomTabNavigatino";
import { Cart, ProductDetails } from "./screens";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoader] = useFonts({
    regular: require("../sofa/assets/fonts/Poppins-Regular.ttf"),
    light: require("../sofa/assets/fonts/Poppins-Light.ttf"),
    bold: require("../sofa/assets/fonts/Poppins-Bold.ttf"),
    medium: require("../sofa/assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("../sofa/assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("../sofa/assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onlayoutRootView = useCallback(async () => {
    if (fontLoader) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoader]);

  if (!fontLoader) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigatino}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
