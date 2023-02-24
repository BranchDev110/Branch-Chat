import React, { useState } from "react";
import { Link } from "@react-navigation/native";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Image, Button, Colors, TabController } from "react-native-ui-lib";
import FormInput from "../components/formInput";
import { auth, database } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, update } from "firebase/database";

const SignupScreen = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleChange = (label, value) => {
    const newUserInfo = { ...userInfo, [label]: value };
    setUserInfo(newUserInfo);
  };
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, userInfo.Email, userInfo.Password)
      .then(() => {
        update(ref(database, `users/${userInfo.Email}`), {
          Email: userInfo.Email,
        })
          .then(() => console.log("d"))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
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
          <FormInput labelName="UserName" onChange={handleChange} />
          <FormInput labelName="Email" onChange={handleChange} />
          <FormInput labelName="Password" onChange={handleChange} />
          <FormInput labelName="Confirm" onChange={handleChange} />
          <Button
            label={"Sign up"}
            backgroundColor={Colors.green20}
            style={{ width: 300, marginBottom: 20, opacity: 0.7 }}
            onPress={handleSubmit}
          />
          <Link to={{ screen: "Signin" }} style={{ color: Colors.green1 }}>
            Sign in
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

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
    alignItems: "center",
    marginTop: 50,
  },
});

export default SignupScreen;
