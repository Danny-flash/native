import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: "#f8fafc",
        headerStyle: {
          backgroundColor: "#0f172a",
        },
        tabBarStyle: {
          backgroundColor: "#0f172a",
        },
        tabBarActiveTintColor: "#f8fafc",
        tabBarInactiveTintColor: '#94a3b8',
      }}
    >
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={24} />
          ),
          title: "Settings",
          tabBarBadge: 3,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
          title: "Explore",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
