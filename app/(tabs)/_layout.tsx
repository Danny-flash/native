/* eslint-disable import/no-unresolved */
import React from "react";
import { Tabs } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={{
          uri: "https://preview.redd.it/some-cute-purple-wallpapers-for-you-v0-3yeky2wvph7a1.jpg?width=620&format=pjpg&auto=webp&s=ae4069eeb98aa348dd13f7f9d0b92b785658fa54",
        }}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        {icon}
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      {icon}
    </View>
  );
};
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow:'hidden',
          borderWidth: 1,
          borderColor: '#0f0D23'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Icon
                  name="home"
                  size={20}
                  color={focused ? "#151312" : "#A8B5DB"}
                />
              }
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Icon
                  name="search"
                  size={20}
                  color={focused ? "#151312" : "#A8B5DB"}
                />
              }
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Icon
                  name="save"
                  size={20}
                  color={focused ? "#151312" : "#A8B5DB"}
                />
              }
              title="Saved"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={
                <Icon
                  name="verified-user"
                  size={20}
                  color={focused ? "#151312" : "#A8B5DB"}
                />
              }
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
