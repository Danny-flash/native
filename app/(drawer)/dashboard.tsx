import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DashboardPage() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: StatusBar.currentHeight || 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
