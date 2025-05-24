import { StyleSheet, Text, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
