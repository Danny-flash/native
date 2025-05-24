import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, Text } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  return (
    <>
    <StatusBar style="light" />
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#6a51ae" },
        headerTintColor: "#fff",
        headerRight: () => (
          <Pressable onPress={() => router.push("/profile")}>
            <Text style={{ color: "#fff" }}>Menu</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "Home",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="(drawer)"
        options={{
          title: "Home",
          headerShown: false
        }}
      />
    </Stack>
    </>
  );
}
