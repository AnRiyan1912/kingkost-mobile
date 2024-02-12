import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomTabNavigation from "./BottomTabNavigation";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import DetailKostScreen from "../screens/DetailKostScreen/DetailKostScreen";
import InfoProfilScreen from "../screens/InfoProfileScreen/InfoProfilScreen";
import HelpCenterScreen from "../screens/HelpCenterScreen/HelpCenterScreen";
import PrivacyAndPolicyScreen from "../screens/PrivacyAndPolicyScreen/PrivacyAndPolicyScreen";
import MaleKostListScreen from "../screens/MaleKostListScreen/MaleKostListScreen";
import FemaleKostListScreen from "../screens/FemaleKostListScreen/FemaleKostListScreen";
import PopularKostAreaScreen from "../screens/PopularKostAreaScreen/PopularKostAreaScreen";
import ListAllKostScreen from "../screens/ListAllKostScreen/ListAllKostScreen";
import CreateOrderScreen from "../screens/CreateOrderScreen/CreateOrderScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  const [signedIn, setSignedIn] = React.useState(true);

  const getIsSignedIn = async () => {
    let isSignedIn = await AsyncStorage.getItem("token");
    setSignedIn(isSignedIn ? true : false);
  };

  React.useEffect(() => {
    getIsSignedIn();
  }, []);

  return (
    <Stack.Navigator>
      {signedIn ? (
        <>
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailKostScreen"
            component={DetailKostScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailKostScreen"
            component={DetailKostScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PopularKostArea"
            component={PopularKostAreaScreen}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="ListAllKostScreen"
            component={ListAllKostScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoProfile"
            component={InfoProfilScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HelpCenter"
            component={HelpCenterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PrivacyAndPolicy"
            component={PrivacyAndPolicyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MaleKostListScreen"
            component={MaleKostListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FemaleKostListScreen"
            component={FemaleKostListScreen}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="CreateOrderScreen"
            component={CreateOrderScreen}
            options={{ headerShown: false }}
          />
          
        </>
      )}
    </Stack.Navigator>
  );
};
