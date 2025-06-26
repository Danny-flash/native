import {
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import { MovieCard } from "@/components/MovieCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading,
    error,
    refetch,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (searchQuery?.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 1000);

    return () => clearTimeout(timeOutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      {/* <Image
        source={{
          uri: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Beautiful-Purple-Wallpaper.jpg",
        }}
        className="w-full h-full z-0 absolute"
      /> */}

      <View className="flex-1 mt-5">
        <>
          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={({ item }, index) => index.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "center",
              gap: 15,
              marginVertical: 16,
            }}
            className="mt-2 pb-32"
            ListHeaderComponent={
              <>
                <View className="w-full flex-row justify-center mt-20 items-center">
                  <Image
                    source={{
                      uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/desyokd-fb6dd0d9-e0b1-48a5-a264-23545ca65605.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGVzeW9rZC1mYjZkZDBkOS1lMGIxLTQ4YTUtYTI2NC0yMzU0NWNhNjU2MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eOj81_VY2zp8snecg4zWVGVcnEftvM_mU53O4z8vzBY",
                    }}
                    className="w-12 h-12"
                  />
                </View>
                <View className="my-5">
                  <SearchBar
                    value={searchQuery}
                    onChangeText={(text: string) => setSearchQuery(text)}
                  />
                </View>
                {loading && (
                  <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    className="my-3"
                  />
                )}
                {error && (
                  <Text className="text-red-500 px-5 my-3">
                    Error: {error?.message}
                  </Text>
                )}
                {!loading &&
                  !error &&
                  searchQuery.trim() &&
                  movies?.length > 0 && (
                    <Text className="text-xl text-white font-bold">
                      Search Results for{" "}
                      <Text className="text-accent">{searchQuery}</Text>
                    </Text>
                  )}
              </>
            }
            ListEmptyComponent={
              !loading && !error ? (
                <View className="mt-10 px-5">
                  <Text className="text-enter text-gray-500">
                    {searchQuery?.trim()
                      ? "No movies found"
                      : "Search for a movie"}
                  </Text>
                </View>
              ) : null
            }
          />
        </>
      </View>
    </View>
  );
};

export default Search;
