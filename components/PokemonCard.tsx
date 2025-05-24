import { PokemonData } from "@/app";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#ffd700", emoji: "⚡" };
    case "water":
      return { borderColor: "#6493ea", emoji: "💧" };
    case "fire":
      return { borderColor: "#ff5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66cc66", emoji: "🌿" };
    default:
      return { borderColor: "#a0a0a0", emoji: "❓" };
  }
};

type PokemonCardProps = {
  item: PokemonData;
};
export const PokemonCard = ({ item }: PokemonCardProps) => {
  const { Weaknesses, hp, image, data, name, type } = item;
  const { emoji, borderColor } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>{hp}❤️hp</Text>
      </View>
      <Image
        source={{ uri: image }}
        style={styles.image}
        accessibilityLabel={`${name} Pokemon`}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {data.join(", ")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weaknesses: {Weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    //maxWidth: 300,
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "space-between",
    marginBottom: 32,
    alignItems: "center",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 4,
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 10,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
