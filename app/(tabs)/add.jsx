import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Add = () => {
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      icon: "shopping-cart",
      title: "Grocery",
      subtitle: "Store",
      amount: "$10000",
      date: "10/5/2025",
    },
    {
      id: "2",
      icon: "cutlery",
      title: "Food",
      subtitle: "Eat",
      amount: "$2000",
      date: "4/2/2025",
    },
    {
      id: "3",
      icon: "car",
      title: "Transport",
      subtitle: "Travel",
      amount: "$3000",
      date: "8/1/2025",
    },
    {
      id: "4",
      icon: "home",
      title: "Rent",
      subtitle: "Home",
      amount: "$900",
      date: "15/3/2025",
    },
  ]);

  const calculateTotalExpense = () => {
    return transactions.reduce((total, item) => {
      const amount = parseFloat(item.amount.replace(/[^0-9.-]+/g, "")) || 0;
      return total + amount;
    }, 0);
  };

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    icon: "money",
    title: "",
    subtitle: "",
    amount: "",
    date: "",
  });

  const handleLongPress = (item) => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () =>
          setTransactions(transactions.filter((i) => i.id !== item.id)),
      },
    ]);
  };

  const handleAddTransaction = () => {
    const newItem = {
      ...formData,
      id: Math.random().toString(),
    };
    setTransactions([newItem, ...transactions]);
    setShowForm(false);
    setFormData({
      icon: "money",
      title: "",
      subtitle: "",
      amount: "",
      date: "",
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onLongPress={() => handleLongPress(item)}
      delayLongPress={300}
    >
      <View style={styles.transactioncon}>
        <FontAwesome
          name={item.icon}
          size={28}
          color="#ff7301"
          style={{ marginRight: 10 }}
        />
        <View style={styles.transaction}>
          <View>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionSub}>{item.subtitle}</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.cardContainer}>
              <Image
                source={require("../../assets/images/card.png")}
                style={styles.cardImage}
              />
              <Text style={styles.textTopLeft}>Total Income</Text>
              <Text style={styles.numTopLeft}>100000</Text>
              <Text style={styles.textTopRight}>Total Expense</Text>
              <Text style={styles.numTopRight}>${calculateTotalExpense()}</Text>
              <Text style={styles.textBottomLeft}>Total Balance</Text>
              <Text style={styles.numBottomLeft}>100000</Text>
              <Text style={styles.cardNumber}>* * * * * * * * * * * * 110</Text>
            </View>
            <Text style={styles.heading}>Recent Transaction</Text>
          </>
        }
        ListFooterComponent={
          <TouchableOpacity
            style={styles.realAddButton}
            onPress={() => setShowForm(true)}
          >
            <Text style={styles.realAddText}>+ Add New Transaction</Text>
          </TouchableOpacity>
        }
      />

      <Modal visible={showForm} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Add Transaction</Text>

            <TextInput
              placeholder="Title"
              value={formData.title}
              onChangeText={(text) => setFormData({ ...formData, title: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Subtitle"
              value={formData.subtitle}
              onChangeText={(text) =>
                setFormData({ ...formData, subtitle: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Amount (e.g. $500)"
              value={formData.amount}
              onChangeText={(text) =>
                setFormData({ ...formData, amount: text })
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Date (e.g. 19/7/2025)"
              value={formData.date}
              onChangeText={(text) => setFormData({ ...formData, date: text })}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={handleAddTransaction}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => setShowForm(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },
  cardContainer: {
    height: 280,
    width: 400,
    alignSelf: "center",
    marginTop: 10,
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    position: "absolute",
  },
  textTopLeft: {
    position: "absolute",
    top: 100,
    right: 40,
    fontSize: 16,
    color: "#fff",
  },
  numTopLeft: {
    position: "absolute",
    top: 120,
    right: 40,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  textTopRight: {
    position: "absolute",
    top: 30,
    right: 35,
    fontSize: 16,
    color: "#fff",
  },
  numTopRight: {
    position: "absolute",
    top: 50,
    right: 40,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  textBottomLeft: {
    position: "absolute",
    bottom: 115,
    left: 50,
    fontSize: 16,
    color: "#fff",
  },
  numBottomLeft: {
    position: "absolute",
    bottom: 90,
    left: 70,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  cardNumber: {
    position: "absolute",
    bottom: 35,
    right: 80,
    fontSize: 18,
    color: "#fff",
    letterSpacing: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactioncon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#37393a",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  transactionSub: {
    fontSize: 12,
    color: "#ffffff",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff7301",
  },
  transactionDate: {
    fontSize: 12,
    color: "#ffffff",
  },
  realAddButton: {
    backgroundColor: "#37393a",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  realAddText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: 20,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  submitBtn: {
    backgroundColor: "#00c853",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelBtn: {
    alignItems: "center",
  },
  cancelText: {
    color: "#309393",
    fontWeight: "bold",
  },
});
