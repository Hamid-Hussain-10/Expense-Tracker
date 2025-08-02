import { Tabs, router } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#ff7301",
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AntDesign name="home" size={23} color={color} />
            ) : (
              <FontAwesome name="home" size={23} color={color} />
            ),
        }}
      />

      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          headerShown: true,
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingLeft: 15 }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Image
              source={require("../../assets/images/credit-card.png")}
              style={{ width: 50, height: 50, marginRight: 15 }}
              resizeMode="contain"
            />
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus" size={23} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="summary"
        options={{
          title: "Summary",
          headerShown: true,
          animation: "fade",
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={23} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
