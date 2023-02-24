import React from "react";
import { StyleSheet } from "react-native";
import { TextField } from "react-native-ui-lib";

const FormInput = ({ labelName, onChange, ...rest }) => {
	const handleChange = (value) => {
		onChange(labelName, value);
	}
  return (
    <TextField
      placeholder={labelName}
      enableErrors
      validate={["required", "email", (value) => value.length > 6]}
      validationMessage={[
        "Field is required",
        "Email is invalid",
        "Password is too short",
      ]}
      onChangeText={handleChange}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "#eeeeee",
    borderRadius: 25,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    padding: 10,
    width: 300,
    height: 50,
    shadowColor: "#000",
    shadowOpacity: 0.05,
  },
});

export default FormInput;
