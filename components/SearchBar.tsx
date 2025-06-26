/* eslint-disable import/no-unresolved */
import { View, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  onPress?: () => void;
  placeholder?: string;
  value?: string;
  onChangeText?: (e: string) => void;
}

export const SearchBar = ({ onPress, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Icon name="search" size={20} color="#ab8bff" />
      <TextInput
        onPress={onPress}
        placeholder="Search for a movie"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#ab8bff"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};
