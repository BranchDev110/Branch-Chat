import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { Button, Colors, Image } from "react-native-ui-lib";

const SplashScreen = ({navigation}) => {
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
        <Button
          label={"Continue"}
          backgroundColor={Colors.green20}
          style={{ width: 350, marginBottom: 50, opacity: 0.7 }}
					onPress={() => navigation.navigate('Login')}
        />
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
});

export default SplashScreen;
