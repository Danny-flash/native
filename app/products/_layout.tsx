import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function ProductLayout() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "green",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff" }}>
          Header
        </Text>
      </View>
      <Slot />
      <View
        style={{
          backgroundColor: "green",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff" }}>
          Footer
        </Text>
      </View>
    </SafeAreaView>
  );
}
