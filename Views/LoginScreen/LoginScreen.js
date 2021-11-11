import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
import ErrorMessage from "../../components/ErrorMessage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const onHandleSignup = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth.createUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth
          .signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            console.log(userCredential.user.email);
          });
        console.log("logado");
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      {/* Possivel componente */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onLogin} style={styles.button}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          touchSoundDisabled="false"
          onPress={onHandleSignup}
          style={[styles.button, styles.buttonOutLineText]}
        >
          <Text style={styles.buttonR}>Register</Text>
        </TouchableOpacity>
      </View>
      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    color: "white",
    backgroundColor: "#006BFF",
    minWidth: "100%",
    textAlign: "center",
    height: 60,
    textAlignVertical: "center",
    borderRadius: 5,
  },
  buttonR: {
    color: "#006BFF",
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 17
  },
  buttonOutLineText: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#006BFF",
    borderWidth: 2,
    color: "#006BFF",
  },
  buttonOutLine: {},
});
