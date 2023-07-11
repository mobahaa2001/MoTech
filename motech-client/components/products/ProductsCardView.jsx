import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productsCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductsCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://www.apple.com/v/macbook-air-m1/e/images/meta/macbook-air_overview__15sjf4iagj6q_og.png?202305290256",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            M1
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Apple
          </Text>
          <Text style={styles.price}>$23165</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={25} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsCardView;
