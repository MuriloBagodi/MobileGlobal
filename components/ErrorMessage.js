import React from "react";
import { StyleSheet, Text } from "react-native";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>Senha ou Email invalidos</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 10,
    color: "red",
    fontSize: 10,
    marginBottom: 10,
    fontWeight: "600",
  },
});

export default ErrorMessage;
