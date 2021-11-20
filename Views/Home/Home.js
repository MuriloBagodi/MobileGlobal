import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/core";
import { Accordion, Block, Button } from "galio-framework";

const data = [
  {
    title: "Torneira Banheiro 1",
    content: "Gasto de 18L Por Dia",
  },
  { title: "Torneira Banheiro 2", content: "Gasto de 18L Por Dia" },
  { title: "Torneira Banheiro 3", content: "Gasto de 1L Por Dia" },
  { title: "Torneira Banheiro 4", content: "Gasto de 6L Por Dia" },
  { title: "Torneira Banheiro 5", content: "Gasto de 8L Por Dia" },
  { title: "Torneira Banheiro 6", content: "Gasto de 10L Por Dia" },
];

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
          <Block style={{ height: 200, paddingTop: 10 }}>
            <Text>Gastos Diarios: </Text>
            <Accordion dataArray={data} />
          </Block>
        </View>
        <View style={styles.Row}>
          <TouchableOpacity onPress={handleSingOut}>
            <Button color="#FF0073" shadowless>
              Sair
            </Button>
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
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonExit: {
    width: "100%",
    backgroundColor: "red",
    padding: 20,
    borderRadius: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#fafafa",
  },
  Row: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
});
