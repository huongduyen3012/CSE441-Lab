import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import styles from "../style";
import { SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

const SearchProducts = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let filePath = 'https://dummyjson.com/products';

    const searchProduct = () => {
        if (value != '')
            filePath = 'https://dummyjson.com/products/search?q=' + value;
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((d) => {
                setData(d.products)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        console.log(data)
    };

    const ProductSearch = ({ data }) => (
            <Card style={styles.cardContainer}>
                <Card.Cover source={{ uri: data.images[1]}} />
                <Card.Title title={data.title} subtitle={data.description} />
    
                <Card.Content>
                    <Text>Price: ${data.price }</Text>
                    <Text >Discount: {data.discountPercentage}%</Text>
                    <Text>Rating: {data.rating} stars</Text>
                    <Text>Stock: {data.stock} units</Text>
                    <Text>Brand: {data.brand}</Text>
                    <Text>Category: {data.category}</Text>
                </Card.Content>
            </Card>
    );

    return (
        <SafeAreaView style={{backgroundColor: '#f0f0f0'}}>
            <Text style={styles.title}>Search Product</Text>
            <Searchbar style={styles.searchBar} value={value} onChangeText={value => setValue(value)} onIconPress={searchProduct} />
            <Button style={styles.btnSearch} mode="contained" onPress={searchProduct}>SEARCH</Button>

            <FlatList data={data}
                renderItem={({ item }) => <ProductSearch data={item} />}
                keyExtractor={item => item.id} />
        </SafeAreaView>
    );
};

export default SearchProducts;