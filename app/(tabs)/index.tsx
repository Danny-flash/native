import { View, Image, ScrollView } from "react-native";
import React from "react";
import { SearchBar } from "@/components/SearchBar";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      {/* <Image
        source={{
          uri: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Beautiful-Purple-Wallpaper.jpg",
        }}
        className="w-full h-full z-0 absolute"
      /> */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={{
            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/desyokd-fb6dd0d9-e0b1-48a5-a264-23545ca65605.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVzeW9rZC1mYjZkZDBkOS1lMGIxLTQ4YTUtYTI2NC0yMzU0NWNhNjU2MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eOj81_VY2zp8snecg4zWVGVcnEftvM_mU53O4z8vzBY",
          }}
          className="w-20 h-20 mt-20 mx-auto mb-5"
        />
        <View className="flex-1 mt-5">
          <SearchBar 
              onPress={() => router.push("./search")}

          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;
