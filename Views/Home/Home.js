import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";

const Home = () => {
  const navigation = useNavigation();
  const handleSingOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Row}>
            
        </View>
        <View style={styles.Row}>
          <TouchableOpacity style={styles.buttonExit} onPress={handleSingOut}>
            <Text style={styles.txt}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  buttonExit: {
    width: '100%',
    backgroundColor: "red",
    margin: 10,
    padding: 20,
    borderRadius: 15,
  },
  txt: {
    color: "#fafafa",
  },
  Row:{
    flexDirection: 'row',
    backgroundColor: "black",
    justifyContent: 'center',
    width: '100%'
  }
});
