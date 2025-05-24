import React from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text style={{ color: "white" }}>HomeScreen</Text>
      <Button
        title="About us"
        onPress={() => navigation.navigate("About", { name: "Danny Phantom" })}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: StatusBar.currentHeight || 20,
  },
});
