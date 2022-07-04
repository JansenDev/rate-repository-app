import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  error: {
    borderColor: "red"
  }
});

function StyledTextInput({ style = {}, error, ...props }) {
  const inputStyle = [styles.textInput, style, error && styles.error];
  return <TextInput style={inputStyle} {...props} />;
}

export default StyledTextInput;
