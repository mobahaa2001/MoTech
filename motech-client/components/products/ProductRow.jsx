import { FlatList, View, Text } from "react-native";
import React from "react";
import styles from "./productsRow.style";
import { SIZES } from "../../constants";
import ProductsCardView from "./ProductsCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductsCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
