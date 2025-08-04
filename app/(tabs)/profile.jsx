import { FontAwesome5 } from "@expo/vector-icons";
import { View, StyleSheet, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FontAwesome5
          name="user-circle"
          size={100}
          color="#fff"
          style={{ marginLeft: 8 }}
        />
        <Text style={styles.text}>Hamid Hussain</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/card1.png")}
            style={styles.card1}
          />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Frontend & Mobile App Developer</Text>
        <Text style={styles.detailText}>hhdev456@gmail.com</Text>
        <Text style={styles.detailText}>+92 343 3563121</Text>
        <Text style={styles.detailText}>
          Portfolio: hamid-hussain.netlify.app
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  card1: {
    width: 500,
    height: 350,
    resizeMode: "contain",
  },
  detailsContainer: {
    backgroundColor: "#1A1A1A",
    padding: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  detailText: {
    color: "#ccc",
    fontSize: 14,
    marginVertical: 2,
  },
});
