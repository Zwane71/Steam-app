import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./app/(auth)/sign-up";
import ConfirmationCode from "./app/(auth)/code";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
