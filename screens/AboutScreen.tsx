import React from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

import { RouteProp } from "@react-navigation/native";

type AboutScreenRouteProp = RouteProp<{ params: { name: string } }, "params">;

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Welcome </Text>
      <Button
        title="Update the name"
        onPress={() => navigation.toggleDrawer()}
      />
      <Button
        title="Home"
        onPress={() => navigation.jumpTo('Home')}
      />
    </View>
  );
};

export default AboutScreen;
const styles = StyleSheet.create({
  container: {
    padding: StatusBar.currentHeight || 20,
  },
});
