/* eslint-disable import/no-unresolved */
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const MovieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: any) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://pcuv.es/.resources/pcuv-module/webresources/images/img-not-found.png",
          }}
          className="w-full h-52 rounded-lg" resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold mt-2 line-clamp-1">{title}</Text>
        <View className="flex-row justify-start items-center gap-x-1">
      <Icon name="star" size={16} color="gold" />
<Text className="text-white text-xs font-bold uppercase">{Math.round(vote_average / 2)}</Text>
        </View>
        <View className="flex-row items-center justify-between">
            <Text className="text-xs text-light-300 mt-1 font-medium">{release_date?.split('-')[0]}</Text>
            {/* <Text className="text-xs text-light-300 mt-1 font-medium">Movie</Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};
