import React from "react";
import { Link } from "@react-navigation/native";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Image, Button, Colors } from "react-native-ui-lib";
import FormInput from "../components/formInput";

const LoginScreen = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../../assets/background.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.logoContent}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.logoText}>Branch - Chat</Text>
      </View>
      <View style={styles.formContent}>
        <FormInput labelName="Email" />
        <FormInput labelName="Password" />
        <Button
          label={"Sign In"}
          backgroundColor={Colors.green20}
          style={{ width: 300, marginBottom: 20, opacity: 0.7 }}
          onPress={() => navigation.navigate("Login")}
        />
        <Link to={{screen: 'Signup'}} style={{color: Colors.green1}}>Sign up</Link>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 80,
    marginTop: 30,
  },
  logoText: {
    marginTop: 20,
    marginBottom: 20,
  },
  logoContent: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#50c878",
    opacity: 0.5,
  },
  formContent: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  }
});

export default LoginScreen;
