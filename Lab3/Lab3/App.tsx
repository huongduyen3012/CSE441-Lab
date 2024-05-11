import React, { useState } from "react";
import Products from "./Products/Products";
import AddProduct from "./Products/Product_Add";
import SearchProducts from "./Products/Product_Search";
import ProductDetail from "./Products/Product_Detail";
import { BottomNavigation } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Products', title: 'Products', focusedIcon: 'format-list-bulleted' },
    { key: 'Product_Add', title: 'Add', focusedIcon: 'card-plus' },
    { key: 'Product_Search', title: 'Search', focusedIcon: 'file-find' },
    { key: 'Product_Detail', title: 'Detail', focusedIcon: 'details', }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Products: Products,
    Product_Add: AddProduct,
    Product_Search: SearchProducts,
    Product_Detail: ProductDetail,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation navigationState={{ index, routes }} 
      onIndexChange={setIndex} renderScene={renderScene} />
    </SafeAreaProvider>
  )
};