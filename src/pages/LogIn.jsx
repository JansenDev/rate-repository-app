import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidation } from "../validationSchemas/login";

const initialValues = {
  email: "",
  password: ""
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  error: {
    color: "red"
  }
});

const FormikInputValue = ({ nameInput, ...props }) => {
  const [field, meta, helpers] = useField(nameInput);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

function LogIn() {
  return (
    <Formik
      validationSchema={loginValidation}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue placeholder="E-mail" nameInput="email" />
            <FormikInputValue
              placeholder="Password"
              nameInput="password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Login" />
          </View>
        );
      }}
    </Formik>
  );
}

export default LogIn;
