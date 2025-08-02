import { StyleSheet, Text, View, Image } from "react-native";

const add = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/card.png")}
          style={styles.cardImage}
        />
        <Text style={styles.text}>100000</Text>
        <Text style={styles.text1}>* * * * * * * * * 110</Text>
      </View>
      <Text>Transaction</Text>
    </View>
  );
};

export default add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  cardImage: {
    width: 400,
    height: 280,
    position: "relative",
    top: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: 85,
    right: 50,
    color: "#ffff",
  },
    text1: {
    fontSize: 22,
    fontWeight: "bold",
    position: "absolute",
    top: 220,
    right: 120,
    color: "#ffff",
  },
});
