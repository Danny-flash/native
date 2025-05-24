import "react-native-gesture-handler";
import React from "react";

import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export type PokemonData = {
  name: string;
  image: string;
  type: string;
  hp: number;
  data: string[];
  Weaknesses: string[];
};


const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionHeaderText}>Home Page</Text>
        <Link href="/about" style={styles.sectionHeaderText}>
          About
        </Link>
        <Link href="/profile" style={styles.sectionHeaderText}>
          Profile
        </Link>
        <Link href='/products' style={styles.sectionHeaderText}>
          Product
        </Link>
        <Link href='/(tabs)/settings' style={styles.sectionHeaderText}>
          Settings
        </Link>
        <Link href='/(drawer)/dashboard' style={styles.sectionHeaderText}>
          Dashboard
        </Link>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: StatusBar.currentHeight || 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  sectionHeaderText: {
    backgroundColor: "#fff",
    fontWeight: "500",
    fontSize: 20,
  },
});

//rnfs
