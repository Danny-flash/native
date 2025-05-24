import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ProductsDetails() {
  const { slug } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Product {slug}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
