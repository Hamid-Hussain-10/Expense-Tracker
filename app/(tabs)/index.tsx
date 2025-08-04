import { router } from "expo-router";
import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/credit-card.png")}
          style={styles.cardImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>EXPENSE</Text>
        <Text style={styles.title}>TRACKER</Text>
        <Text style={styles.subtitle}>
          The right app make it easy to manage your expenses on the go. Personal
          Capital - Expensify
        </Text>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/add")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    justifyContent: "space-around",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
  },
  cardImage: {
    width: 500,
    height: 300,
    position: "absolute",
    top: -50,
    left: -50,
    zIndex: 1,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "800",
    fontStyle: "italic",
    color: "#ffffff",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#B0B0B0",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  nextButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    marginTop: 20,
  },
  nextButtonText: {
    color: "#1A1A1A",
    fontSize: 16,
    fontWeight: "600",
  },
});
