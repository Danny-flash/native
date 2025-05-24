import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function productsDetails() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Product List</Text>
      <Link href="/products/1" style={{ fontSize: 20 }}>
        Product 1
      </Link>
      <Link href="/products/2" style={{ fontSize: 20 }}>
        Product 2
      </Link>
      <Link href="/products/best-sellers/stay-tuned" style={{ fontSize: 20 }}>
        Product Best sellers
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
