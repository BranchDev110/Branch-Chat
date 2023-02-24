import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import LoginScreen from "../screens/loginScreen";
import SignupScreen from "../screens/signupScreen";
import SplashScreen from "../screens/splashScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerShown={false}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
